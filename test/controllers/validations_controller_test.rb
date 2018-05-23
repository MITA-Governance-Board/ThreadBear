require 'test_helper'

class ValidationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @validation = validations(:one)
  end

  test "should get index" do
    get validations_url, as: :json
    assert_response :success
  end

  test "should create validation" do
    assert_difference('Validation.count') do
      post validations_url, params: { validation: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show validation" do
    get validation_url(@validation), as: :json
    assert_response :success
  end

  test "should update validation" do
    patch validation_url(@validation), params: { validation: {  } }, as: :json
    assert_response 200
  end

  test "should destroy validation" do
    assert_difference('Validation.count', -1) do
      delete validation_url(@validation), as: :json
    end

    assert_response 204
  end
end
