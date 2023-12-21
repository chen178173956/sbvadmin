--
--  change_default_avatar
--
UPDATE sys_permission SET `order_no` = 10000 WHERE `id` = 4;
UPDATE sys_user SET `avatar` = 'avatar.png' WHERE `id` in (1,2,3);
INSERT INTO `sys_config` (`symbol`, `value`, `name`,`description`, `order_no`, `create_time`,`update_time`)
VALUES ('host_ip', '127.0.0.1','平台IP','',0,now(),now());