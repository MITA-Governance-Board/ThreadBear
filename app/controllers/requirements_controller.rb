class RequirementsController < ApplicationController
  before_action :set_requirement, only: [:show, :update, :destroy]

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

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_requirement
      @requirement = Requirement.find({_id: params[:id]})
    end

    # Only allow a trusted parameter "white list" through.
    def requirement_params
      params.fetch(:requirement, {})
    end
end
