class RequirementInstancesController < ApplicationController
  before_action :set_requirement_instance, only: [:show, :update, :destroy]

  # GET /requirement_instances
  def index
    @requirement_instances = RequirementInstance.all
    render json: @requirement_instances
  end

  # GET /requirement_instances/1
  def show
    render json: @requirement_instance, include: {
      validation_instances: {
        except: [:requirement_instance_id, :updated_at, :validation_id],
        include: {
          failures: {
            except: [:validation_instance_id]
          },
          validation: {
            except: [:_id]
          }
        }
      }
    }
  end

  # POST /requirement_instances
  def create
    @requirement_instance = RequirementInstance.new(requirement_instance_params)
    if @requirement_instance.save
      render json: @requirement_instance, status: :created, location: @requirement_instance
    else
      render json: @requirement_instance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /requirement_instances/1
  def update
    if @requirement_instance.update(requirement_instance_params)
      render json: @requirement_instance
    else
      render json: @requirement_instance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /requirement_instances/1
  def destroy
    @requirement_instance.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_requirement_instance
    @requirement_instance = RequirementInstance.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def requirement_instance_params
    params.fetch(:requirement_instance, {})
  end
end
