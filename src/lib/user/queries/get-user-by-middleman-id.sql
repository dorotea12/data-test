SELECT 
  user_id,
  middleman_id,
  instance_id,
  user_status,
  permission_set_id,
  email,
  first_name,
  last_name,
  created_user_id,
  created_date,
  last_modified_user_id,
  last_modified_date
FROM users
WHERE middleman_id = $1;