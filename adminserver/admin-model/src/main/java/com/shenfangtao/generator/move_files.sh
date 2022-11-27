#!/bin/bash
echo '*************************开始移动后端文件*************************'
# 移动自动生成的文件到对应的文件夹，如果已经存在则不覆盖，防止辛苦写的代码被干掉了
# 这里低代码生产的代码放到了admin-model中的src/main/java/com/shenfangtao/generator/tempFiles
mv -n src/main/java/com/shenfangtao/generator/tempFiles/com/shenfangtao/controller/*.java ../admin-web/src/main/java/com/shenfangtao/controller
mv -n src/main/java/com/shenfangtao/generator/tempFiles/com/shenfangtao/model/*.java ../admin-model/src/main/java/com/shenfangtao/model
mv -n src/main/java/com/shenfangtao/generator/tempFiles/com/shenfangtao/mapper/*.java ../admin-mapper/src/main/java/com/shenfangtao/mapper
mv -n src/main/java/com/shenfangtao/generator/tempFiles/com/shenfangtao/service/impl/*.java ../admin-service/src/main/java/com/shenfangtao/service/impl
mv -n src/main/java/com/shenfangtao/generator/tempFiles/com/shenfangtao/service/*.java ../admin-service/src/main/java/com/shenfangtao/service
mv -n src/main/java/com/shenfangtao/generator/tempFiles/*.xml ../admin-mapper/src/main/resources/mapper
echo '*************************开始移动前端文件*************************'
mv -n src/main/java/com/shenfangtao/generator/tempFiles/com/shenfangtao/vue/api/*.ts ../../../sbvadmin-vben/src/api/sbvadmin
mv -n src/main/java/com/shenfangtao/generator/tempFiles/com/shenfangtao/vue/model/*.ts ../../../sbvadmin-vben/src/api/sbvadmin/model
mv -n src/main/java/com/shenfangtao/generator/tempFiles/com/shenfangtao/vue/view/* ../../../sbvadmin-vben/src/views/sbvadmin
echo '*************************删除自动生成的文件************************'
rm -fr src/main/java/com/shenfangtao/generator/tempFiles
echo '*************************移动完成*********************************'
# 接下来手动修改文件
# model/Log.java
# @Builder
#    public static final Byte ACTION_LEVEL = 1;
#    public static final Byte ERROR_LEVEL = 2;