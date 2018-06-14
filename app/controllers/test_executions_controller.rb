class TestExecutionsController < ApplicationController
before_action :set_requirement_instance, only: [:show]

    def index
        @requirement_instances = RequirementInstance.all
        @executions = @requirement_instances.map do |ri| 
            build_test_execution(ri)
        end
        render json: @executions
      end
    
      # GET /sources/1
      def show
        @execution = build_test_execution(@requirement_instance)

        render json: @execution
      end

    private 

    def set_requirement_instance
        @requirement_instance = RequirementInstance.find(params[:id])
    end

    def build_test_execution(requirement_instance)
        test_exec = TestExecution.new
        test_exec._id = requirement_instance.id
        test_exec.server_name = requirement_instance.server_name
        test_exec.server_url = requirement_instance.server_url
        
        test_exec.checklists = []
        test_exec.tags = []
        test_exec.sources = []
        test_exec.manual_testing = []  
        validations = []
        requirement_instance.validation_instances.map do |vi| 
            vi.validation.requirements.map do |r| 
                checklist = Checklist.new()
                checklist.requirement = r.id
                checklist.name = r.checklist
                checklist.category = r.checklist_category 
                checklist.failures = vi.failures
                test_exec.checklists << checklist
                test_exec.manual_testing << {id: r.id, testing: r.additional_manual_testing}
                test_exec.sources << r.sources
                validations << vi.validation
                test_exec.tags << r.checklist

            end
            test_exec.validations = validations
        end
        test_exec.validation_instances = requirement_instance.validation_instances
        test_exec.execution_date = requirement_instance.created_at
        test_exec.checklists = test_exec.checklists.flatten.uniq{|c| c.requirement}.group_by{|c| c.name}
        test_exec.checklists.map do |k, v|
            test_exec.checklists[k] = v.group_by{|c| c.category}
        end
        test_exec.tags = test_exec.tags.flatten.uniq
        test_exec.sources = test_exec.sources.flatten.uniq{|s| s.name}
        test_exec.manual_testing = test_exec.manual_testing.flatten.select{|t| t[:testing].length > 0}.uniq
        test_exec.requirements = requirement_instance.validation_instances.map{|vi| vi.validation.requirements}.flatten.uniq{|r| r.id}
        return test_exec
    end
end


class TestExecution 
    attr_accessor :_id,
        :server_name, 
        :server_url, 
        :execution_date,
        :tags,
        :sources,
        :manual_testing,
        :checklists,
        :validations,
        :requirements,
        :validation_instances
    end

class Checklist 
    attr_accessor :name, 
        :category,
        :description,
        :failures,
        :requirement,
        :state
        def set_state
            unless validation_instances
              update_attribute(:state, 'Not Assessed')
              return
            end
            instance_states = validation_instances.map do |instance|
              instance.state
            end
            # byebug
            if instance_states.include? 'running'
              update_attribute(:state, 'In Progress')
              return
            elsif !instance_states.include? 'passed'
              update_attribute(:state, "Doesn't Meet")
              return
            elsif instance_states.include? 'failed'
              update_attribute(:state, 'Partially Meets')
              return
            elsif self.requirement.additional_manual_testing.present?
              update_attribute(:state, 'Manual Testing Required')
              return
            else
              update_attribute(:state, 'Meets')
            end
          end
end

class ChecklistValidation 
    attr_accessor :expected_result,
        :alternative_evidence,
        :result
        
end