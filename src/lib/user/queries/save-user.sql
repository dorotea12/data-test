INSERT INTO users (
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
)
VALUES ( 
  $1, 
  $2, 
  $3, 
  $4, 
  $5, 
  $6,
  $7,
  $8,
  $9,
  $10,
  $11,
  $12
) 
ON CONFLICT (user_id) 
DO UPDATE SET
  user_status = $4,
  permission_set_id = $5,
  email = $6,
  first_name = $7,
  last_name = $8,
  last_modified_user_id = $11,
  last_modified_date = $12