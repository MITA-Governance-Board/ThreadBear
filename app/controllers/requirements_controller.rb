class RequirementsController < ApplicationController
  before_action :set_requirement, only: [:show, :update, :destroy, :execute]

  # GET /requirements
  def index
    @requirements = Requirement.all
    render json: @requirements
  end

  # GET /requirements/1
  def show
    render json: @requirement
  end

  # POST /requirements
  def create
    @requirement = Requirement.new(requirement_params)
    if @requirement.save
      render json: @requirement, status: :created, location: @requirement
    else
      render json: @requirement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /requirements/1
  def update
    if @requirement.update(requirement_params)
      render json: @requirement
    else
      render json: @requirement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /requirements/1
  def destroy
    @requirement.destroy
  end

  def execute 
    @requirement_instance = RequirementInstance.create(requirement: @requirement)
    validations = []
    @requirement.validations.each do |v| 
      validation = "#{v.id}_Validation".constantize.new('http://testing.psm.solutionguidance.com:8080/cms/fhir')
       validations << validation.run()

    end
    @requirement_instance.save
    
    @requirement_instance.validation_instances = validations
    
    render json: @requirement_instance, include: {
      validation_instances: {
        except: [ :requirement_instance_id, :updated_at, :validation_id ],
        include: {
          failures: {
            except: [:validation_instance_id]
          },
          validation: {
            except: [ :_id ]
          }
        }
      }
    }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_requirement
    @requirement = Requirement.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def requirement_params
    params.fetch(:requirement, {})
  end
end
