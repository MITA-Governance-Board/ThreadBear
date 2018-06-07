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
        test_exec.requirement_instance_id = requirement_instance.id
        test_exec.server_name = requirement_instance.server_name
        test_exec.server_url = requirement_instance.server_url
        
        test_exec.checklists = []
        test_exec.tags = []
        test_exec.sources = []
        test_exec.manual_testing = []  
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
                
            end
            test_exec.tags << vi.validation.tags
        end
        test_exec.execution_date = requirement_instance.created_at
        test_exec.checklists = test_exec.checklists.flatten.uniq{|c| c.requirement}.group_by{|c| c.category}
        test_exec.tags = test_exec.tags.flatten.uniq
        test_exec.sources = test_exec.sources.flatten.uniq{|s| s.name}
        test_exec.manual_testing = test_exec.manual_testing.flatten.select{|t| t[:testing].length > 0}.uniq

        return test_exec
    end
end


class TestExecution 
    attr_accessor :requirement_instance_id,
        :server_name, 
        :server_url, 
        :execution_date,
        :tags,
        :sources,
        :manual_testing,
        :checklists
    end

class Checklist 
    attr_accessor :name, 
        :category,
        :description,
        :validations,
        :failures,
        :requirement
end

class ChecklistValidation 
    attr_accessor :expected_result,
        :alternative_evidence,
        :result
        
end