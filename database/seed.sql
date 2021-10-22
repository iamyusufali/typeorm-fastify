INSERT INTO public.user_entity (id,email,email_constraint,email_verified,enabled,federation_link,first_name,last_name,realm_id,username,created_timestamp,service_account_client_link,not_before) 
VALUES ('0bd351b2-2ff0-9b3f-d8930fbd3199','cristianoronaldo@gmail.com','cristianoronaldo@gmail.com',false,true,NULL,'Christiano','Ronaldo','React Auth Test','cristaino7',1634878926220,NULL,0);


INSERT INTO public.credential (id,salt,"type",user_id,created_date,user_label,secret_data,credential_data,priority) 
VALUES ('7c370d9e-4495-8903-199449f5d66e',NULL,'password','0bd351b2-2ff0-9b3f-d8930fbd3199',1634878926405,NULL,'{"value":"SY09kkxpF2PfyEGxRo/iFJGFocfSEVukN8yXjJQU+CLYGlG8DOCDmz2Ysycxl0q2StOUxiJyR5dUUnbgbxjh+A==","salt":"IKRYuRbDMJGtNihgHdf2xg==","additionalParameters":{}}','{"hashIterations":27500,"algorithm":"pbkdf2-sha256","additionalParameters":{}}',10);


UPDATE user_entity
SET first_name='Cristiano', username='cristiano7'
WHERE id='0bd351b2-2ff0-9b3f-d8930fbd3199';

