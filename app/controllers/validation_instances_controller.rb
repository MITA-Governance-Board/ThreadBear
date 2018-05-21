class ValidationInstancesController < ApplicationController
  before_action :set_validation_instance, only: [:show, :update, :destroy]

  # GET /validation_instances
  def index
    @validation_instances = ValidationInstance.all

    render json: @validation_instances
  end

  # GET /validation_instances/1
  def show
    render json: @validation_instance
  end

  # POST /validation_instances
  def create
    @validation_instance = ValidationInstance.new(validation_instance_params)

    if @validation_instance.save
      render json: @validation_instance, status: :created, location: @validation_instance
    else
      render json: @validation_instance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /validation_instances/1
  def update
    if @validation_instance.update(validation_instance_params)
      render json: @validation_instance
    else
      render json: @validation_instance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /validation_instances/1
  def destroy
    @validation_instance.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_validation_instance
      @validation_instance = ValidationInstance.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def validation_instance_params
      params.fetch(:validation_instance, {})
    end
end
