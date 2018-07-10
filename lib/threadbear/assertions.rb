module Assertions

  def assert(test, &block)
    unless test
      instance_eval &block
    end
  end

  def assert_equal(expected, actual, &block)
    unless assertion_negated( expected == actual )
      instance_eval &block
    end
  end

  def assert_response_ok(response, &block)
    return if ( [200, 201].include?(response.code) ) 
    instance_eval &block
  end

  def assert_response_not_found(response, &block)
    unless assertion_negated( [404].include?(response.code) )
      instance_eval &block
    end
  end

  def assert_response_unauthorized(response, &block)
    unless assertion_negated( [401, 406].include?(response.code) )
      instance_eval &block
    end
  end

  def assert_response_bad(response, &block)
    unless assertion_negated( [400].include?(response.code) )
      instance_eval &block
    end
  end

  def assert_response_conflict(response, &block)
    unless assertion_negated( [409, 412].include?(response.code) )
      instance_eval &block
    end
  end

  def assert_navigation_links(bundle, &block)
    unless assertion_negated( bundle.first_link && bundle.last_link && bundle.next_link )
      instance_eval &block
    end
  end

  def assert_bundle_response(response, &block)
    unless assertion_negated( response.resource.class == FHIR::DSTU2::Bundle )
      # check what this is...
      found = response.resource
      begin
        found = resource_from_contents(response.body)
      rescue
        found = nil
      end
      instance_eval &block
    end
  end

  def assert_bundle_transactions_okay(response, &block)
    response.resource.entry.each do |entry|
      unless assertion_negated( !entry.response.nil? )
        instance_eval &block
      end
      status = entry.response.status
      unless assertion_negated( status && status.start_with?('200','201','204') )
        instance_eval &block
      end
    end
  end

  def assert_resource_content_type(client_reply, content_type, &block)
    header = client_reply.response[:headers]['content-type']
    response_content_type = header
    response_content_type = header[0, header.index(';')] if !header.index(';').nil?

    unless assertion_negated( "application/fhir+#{content_type}" == response_content_type )
      instance_eval &block
    end
  end

  # Based on MIME Types defined in
  # http://hl7.org/fhir/2015May/http.html#2.1.0.6
  # def assert_valid_resource_content_type_present(client_reply)
  #   header = client_reply.response[:headers]['content-type']
  #   content_type = header
  #   charset = encoding = nil

  #   content_type = header[0, header.index(';')] if !header.index(';').nil?
  #   charset = header[header.index('charset=')+8..-1] if !header.index('charset=').nil?
  #   encoding = Encoding.find(charset) if !charset.nil?

  #   unless assertion_negated( encoding == Encoding::UTF_8 )
  #     raise AssertionException.new "Response content-type specifies encoding other than UTF-8: #{charset}", header
  #   end
  #   unless assertion_negated( (content_type == FHIR::Formats::ResourceFormat::RESOURCE_XML) || (content_type == FHIR::Formats::ResourceFormat::RESOURCE_JSON) )
  #     raise AssertionException.new "Invalid FHIR content-type: #{content_type}", header
  #   end
  # end

  def assert_etag_present(client_reply, &block)
    header = client_reply.response[:headers]['etag']
    assert assertion_negated( !header.nil? ), &block
  end

  def assert_last_modified_present(client_reply, &block)
    header = client_reply.response[:headers]['last-modified']
    assert assertion_negated( !header.nil? ), &block
  end

  def assert_valid_content_location_present(client_reply, &block)
    header = client_reply.response[:headers]['location']
    assert assertion_negated( !header.nil? ), &block
  end

  def assert_response_code(response, code, &block)
    unless assertion_negated( code.to_s == response.code.to_s )
      instance_eval &block
    end
  end

  def assert_resource_type(response, resource_type, &block)
    unless assertion_negated( !response.resource.nil? && response.resource.class == resource_type )
      instance_eval &block
    end
  end

  def assertion_negated(expression)
    if @negated then !expression else expression end
  end

  # def assert_tls_1_2(uri)
  #   tlsTester = TlsTester.new({uri:uri})

  #   unless uri.downcase.start_with?('https')
  #     raise AssertionException.new "URI is not HTTPS: #{uri}"
  #   end

  #   begin
  #     passed, msg = tlsTester.verifyEnsureTLSv1_2
  #     unless passed
  #       raise AssertionException.new msg
  #     end
  #   rescue SocketError => e
  #     raise AssertionException.new "Unable to connect to #{uri}: #{e.message}", e
  #   rescue => e
  #     raise AssertionException.new "Unable to connect to #{uri}: #{e.class.name}, #{e.message}"
  #   end
  # end

  # def assert_deny_previous_tls(uri)
  #   tlsTester = TlsTester.new({uri:uri})

  #   begin
  #     passed, msg = tlsTester.verfiyDenySSLv3
  #     unless passed
  #       raise AssertionException.new msg
  #     end
  #     passed, msg = tlsTester.verfiyDenyTLSv1_1
  #     unless passed
  #       raise AssertionException.new msg
  #     end
  #     passed, msg = tlsTester.verifyDenyTLSv1
  #     unless passed
  #       raise AssertionException.new msg
  #     end
  #   rescue SocketError => e
  #     raise AssertionException.new "Unable to connect to #{uri}: #{e.message}", e
  #   rescue => e
  #     raise AssertionException.new "Unable to connect to #{uri}: #{e.class.name}, #{e.message}"
  #   end
  # end

end

class AssertionException < Exception
  attr_accessor :data
  def initialize(message, data=nil)
    super(message)
    FHIR.logger.error "AssertionException: #{message}"
    @data = data
  end
end

# WILL WE NEED THIS?
class SkipException < Exception
  def initialize(message = '')
    super(message)
    FHIR.logger.info "SkipException: #{message}"
  end
end

class TodoException < Exception
  def initialize(message = '')
    super(message)
    FHIR.logger.info "TodoException: #{message}"
  end
end
