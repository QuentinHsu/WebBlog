# Halo Development

[Halo Official Releases](https://github.com/halo-dev/halo/releases)

## 安装 Halo

### 普通用户

```java
java -jar halo.jar
```

### 开发者(前端)

```java
java -jar -Dspring.profiles.active=dev halo.jar
```

以开启 **开发者模式**，得以访问 api 文档进行开发。

本地 api 文档默认访问链接：`localhost:8090/swagger-ui.html`
