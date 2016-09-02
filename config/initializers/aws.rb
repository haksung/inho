CarrierWave.configure do |config|
  # 다시 쓰면 시크릿 키만 채우기.
  config.fog_credentials = {
    provider:              'AWS',                        # required
    aws_access_key_id:     'AKIAIDKNRIWCMIRE54BA',                        # required
    aws_secret_access_key: '',    # required
    region:                'ap-northeast-2',                              # optional, defaults to 'us-east-1'
    endpoint:              'https://s3-ap-northeast-2.amazonaws.com'      # optional, defaults to nil
  }
  config.fog_directory  = 'inhoproject'                          # required
  config.fog_public     = false                                        # optional, defaults to true
  config.fog_attributes = {} # optional, defaults to {}
end