INSERT INTO public.user_entity (id,email,email_constraint,email_verified,enabled,federation_link,first_name,last_name,realm_id,username,created_timestamp,service_account_client_link,not_before) 
VALUES ('e6e05bd8-b697-4775-be78','christest@gmail.com','christestt@gmail.com',false,true,NULL,'Chris','Test','React Auth Test','christest',1634878926220,NULL,0);

INSERT INTO public.credential (id,salt,"type",user_id,created_date,user_label,secret_data,credential_data,priority) 
VALUES ('29d712e4-f120-4ee4-9b3e-11035b',NULL,'password','e6e05bd8-b697-4775-be78',1634878926405,NULL,'{"value":"eltAlqllM8cwcHDmk+zpg7qP0r/gxAd9W9nIO/w213P8ouDEYuYMJpnC/WeesxVt7SI/QNTJZoAcEduVOXgeUw==","salt":"q1KVfqsDwRXN22awO4uC5fHAV9YGaYkGcfyVaXXBtVet/H1hufOUptV4ldOrQwraN1pt84mwgz11lI8hbNVPPQ==","additionalParameters":{}}','{"hashIterations":27500,"algorithm":"pbkdf2-sha256","additionalParameters":{}}',10);

-- 3uW/g5fjK6fK2/iWsl5Ko2d9xhMisOgMK1SXAIfeQdc/xckZJaALQba0qsyf0GRaU5YG+R7cjC8BxrmbryJD7w==

UPDATE credential
SET secret_data='{"value":"3uW/g5fjK6fK2/iWsl5Ko2d9xhMisOgMK1SXAIfeQdc/xckZJaALQba0qsyf0GRaU5YG+R7cjC8BxrmbryJD7w==","salt":"ffOxaNmO/r5qBmLLHEE1OQ==","additionalParameters":{}}'
WHERE id='29d712e4-f120-4ee4-9b3e-11035b';
