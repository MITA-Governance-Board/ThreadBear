class RequirementInstancesController < ApplicationController
  before_action :set_requirement_instance, only: [:show, :update, :destroy, :new]
  

  # GET /requirement_instances
  def index
    @requirement_instances = RequirementInstance.all
    render json: @requirement_instances, include: {
      validation_instances: {
        except: [:requirement_instance_id, :updated_at, :validation_id],
        include: {
          failures: {
            except: [:validation_instance_id]
          },
          validation: {
            except: [:_id],
            include: {
              requirements: {
                except: [:requirement_id],
                include: {
                  sources: {
                    except: [:source_id]
                  }
                }
              }
            }
          }
        }
      }
    }
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
            except: [:_id],
            include: {
              requirements: {
                except: [:requirement_id],
                include: {
                  sources: {
                    except: [:source_id]
                  }
                }
              }
            }
          }
        }
      }
    }
  end

  # POST /requirement_instances
  def create
    tests = params[:requirement_instance][:tests]
    url = requirement_instance_params[:server_url]
    requirements = []
    validations = []
    tests.each do |t|
      r = Requirement.where({checklist: t})
      validations << r.map {|r| r.validations}.flatten
      requirements<<r
    end
    validations = validations.flatten
    requirements = requirements.flatten
    puts requirement_instance_params
    @requirement_instance = RequirementInstance.create(requirement_instance_params)
    validations.each do |v|
      ValidationInstance.create!(
        url: url,
        validation: v,
        requirement_instance: @requirement_instance,
        state: 'running'
      )
    end
    
    RequirementWorker.perform_async(@requirement_instance._id)
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
    # @requirement_instance = RequirementInstance.new(requirement_instance_params)
    # if @requirement_instance.save
    #   render json: @requirement_instance, status: :created, location: @requirement_instance
    # else
    #   render json: @requirement_instance.errors, status: :unprocessable_entity
    # end
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
    params.require(:requirement_instance).permit(:server_url, :server_name)
  end

end
