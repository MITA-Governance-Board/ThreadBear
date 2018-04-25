require 'test_helper'

class RequirementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @requirement = requirements(:one)
  end

  test "should get index" do
    get requirements_url, as: :json
    assert_response :success
  end

  test "should create requirement" do
    assert_difference('Requirement.count') do
      post requirements_url, params: { requirement: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show requirement" do
    get requirement_url(@requirement), as: :json
    assert_response :success
  end

  test "should update requirement" do
    patch requirement_url(@requirement), params: { requirement: {  } }, as: :json
    assert_response 200
  end

  test "should destroy requirement" do
    assert_difference('Requirement.count', -1) do
      delete requirement_url(@requirement), as: :json
    end

    assert_response 204
  end
end
