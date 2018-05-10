class ValidationsController < ApplicationController
  before_action :set_validation, only: [:show, :update, :destroy]

  # GET /validations
  def index
    @validations = Validation.all

    render json: @validations
  end

  # GET /validations/1
  def show
    render json: @validation
  end

  # POST /validations
  def create
    @validation = Validation.new(validation_params)

    if @validation.save
      render json: @validation, status: :created, location: @validation
    else
      render json: @validation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /validations/1
  def update
    if @validation.update(validation_params)
      render json: @validation
    else
      render json: @validation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /validations/1
  def destroy
    @validation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_validation
      @validation = Validation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def validation_params
      params.fetch(:validation, {})
    end
end
