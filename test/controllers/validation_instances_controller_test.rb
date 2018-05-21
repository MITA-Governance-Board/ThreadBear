require 'test_helper'

class ValidationInstancesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @validation_instance = validation_instances(:one)
  end

  test "should get index" do
    get validation_instances_url, as: :json
    assert_response :success
  end

  test "should create validation_instance" do
    assert_difference('ValidationInstance.count') do
      post validation_instances_url, params: { validation_instance: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show validation_instance" do
    get validation_instance_url(@validation_instance), as: :json
    assert_response :success
  end

  test "should update validation_instance" do
    patch validation_instance_url(@validation_instance), params: { validation_instance: {  } }, as: :json
    assert_response 200
  end

  test "should destroy validation_instance" do
    assert_difference('ValidationInstance.count', -1) do
      delete validation_instance_url(@validation_instance), as: :json
    end

    assert_response 204
  end
end
