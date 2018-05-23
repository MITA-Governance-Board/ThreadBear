require 'test_helper'

class RequirementInstancesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @requirement_instance = requirement_instances(:one)
  end

  test "should get index" do
    get requirement_instances_url, as: :json
    assert_response :success
  end

  test "should create requirement_instance" do
    assert_difference('RequirementInstance.count') do
      post requirement_instances_url, params: { requirement_instance: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show requirement_instance" do
    get requirement_instance_url(@requirement_instance), as: :json
    assert_response :success
  end

  test "should update requirement_instance" do
    patch requirement_instance_url(@requirement_instance), params: { requirement_instance: {  } }, as: :json
    assert_response 200
  end

  test "should destroy requirement_instance" do
    assert_difference('RequirementInstance.count', -1) do
      delete requirement_instance_url(@requirement_instance), as: :json
    end

    assert_response 204
  end
end
