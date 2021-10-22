INSERT INTO public.user_entity (id,email,email_constraint,email_verified,enabled,federation_link,first_name,last_name,realm_id,username,created_timestamp,service_account_client_link,not_before) 
VALUES ('f5dd5cfd-d1f4-4e2c-aab9-14d397c93a0c','demo1@gmail.com','demo1@gmail.com',false,true,NULL,'Demo','One','React Auth Test','demoone',1634878926220,NULL,0);


INSERT INTO public.credential (id,salt,"type",user_id,created_date,user_label,secret_data,credential_data,priority) 
VALUES ('51528fae-3b32-46f3-9825-c36e23d5e6b8',NULL,'password','f5dd5cfd-d1f4-4e2c-aab9-14d397c93a0c',1634878926405,NULL,'{"value":"5tnhtb+1gmHz5+ZRNPCfVXYHqu2DCa+BS12XgfPqDAjarj6O7HVCATnMcKO24ghBQo+QP9Umod+OnOxpoJ6pXg==","salt":"UpnL0WxcyYHv50fNVWJpNA==","additionalParameters":{}}','{"hashIterations":27500,"algorithm":"pbkdf2-sha256","additionalParameters":{}}',10);


UPDATE user_entity
SET first_name='Cristiano', username='cristiano7'
WHERE id='0bd351b2-2ff0-9b3f-d8930fbd3199';

