# 常见问题汇总

下面列举了一下常见问题

## 为什么这个方法/功能不生效呢？{#qa-1}

大概率是版本问题，参考[版本升级](https://laravel-admin.org/docs/zh/1.x/upgrading.md)来升级你的版本。

## 怎么设置语言呢？{#qa-2}

完成安装之后，默认语言为英文(en)，如果要使用中文，打开`config/app.php`，将`locale`设置为`zh-CN`即可。

如果上面修改之后，表单的验证信息还是英文的，那么可以安装[Laravel-lang](https://github.com/caouecs/Laravel-lang)来切换成中文。

## 可以关掉pjax吗？{#qa-3}

打开`app/Admin/bootstrap.php`，加入下面的代码：

```php
use Elegant\Admin\Facades\Admin;

Admin::disablePjax();
```

## 关于扩展自定义组件 {#qa-4}

`laravel-admin`默认引用了大量前端资源，如果有网络问题或者有不需要使用的组件，可以参考[form组件管理](https://laravel-admin.org/docs/zh/1.x/model-form-field-management.md)将其移除。

关于富文本编辑器，由于静态资源包文件普遍太大，所以`laravel-admin`默认通过cdn的方式引用`ckeditor`，建议大家根据自己的需求扩展编辑器，自行配置。

## 关于前端资源问题 {#qa-5}

如果需要使用自己的前端文件，可以在`app/Admin/bootstrap.php`中引入：

```php
Admin::css('path/to/your/css');
Admin::js('path/to/your/js');
```

## 重写登录页面和登录逻辑 {#qa-6}

在路由文件`app/Admin/routes.php`中，覆盖掉登录页面和登录逻辑的路由，即可实现自定义的功能

```php
Route::group([
    'prefix'        => config('admin.prefix'),
    'namespace'     => Admin::controllerNamespace(),
    'middleware'    => ['web', 'admin'],
], function (Router $router) {

    $router->get('auth/login', 'AuthController@getLogin');
    $router->post('auth/login', 'AuthController@postLogin');

});
```

在自定义的控制器`AuthController`中的`getLogin`、`postLogin`方法里分别实现自己的登录页面和登录逻辑。

参考控制器文件[AuthController.php](https://github.com/z-song/laravel-admin/blob/master/src/Controllers/AuthController.php)，视图文件[login.blade.php](https://github.com/z-song/laravel-admin/blob/master/views/login.blade.php)

## 更新静态资源 {#qa-7}

如果遇到更新之后,部分组件不能正常使用,那有可能是`laravel-admin`自带的静态资源有更新了,需要运行命令`php artisan vendor:publish --tag=laravel-admin-assets --force`来重新发布前端资源，发布之后不要忘记清理浏览器缓存.

## 页面乱码问题 {#qa-8}

在下载或者预览文件的时候，可能会遇到页面内容全部乱码的情况，出现这个问题的原因，是因为laravel-admin默认使用pjax来加载页面，它会读取要下载或者预览的内容来渲染到当前页面的内容区域。

解决办法是打开新页面来下载或者预览文件：

```php
<a href="http://xxxx" target="_blank">下载文件</a>
```

a标签上添加`target="_blank"`, 用新页面打开避免使用pjax加载页面。

## 前后台session冲突 {#qa-9}

如果网站前台和管理后台在同一个Laravel项目中，并且在一个域名下，登录的时候可能会遇到前后台session冲突的问题，在版本v1.6.10之后修复了这个问题，先更新到`v1.6.10`以上，然后在`config/admin.php`的`route.middleware`上加上一个中间件`admin.session`即可

```php
    'route' => [

        'middleware' => ['web', 'admin', 'admin.session'],

    ],
```

如果后台使用子域名作为入口比如`admin.example.com`, 和`www.example.com`下的其它项目session冲突，那么可以修改`config/session.php`里面的`cookie`为其它名称（默认为`laravel_session`）。

## 可以去掉权限/角色/日志等功能吗？ {#qa-10}

你可能只需要用户表，不需要角色、权限、日志等功能，那么可以更新到`v1.7.3`或以上版本，然后打开`config/admin.php`, 设置下面几项：

```php
'check_route_permission' => false,

'check_menu_roles' => false,

'operation_log' => [

    'enable' => false,

]
```

然后你可以删掉除了`admin_users`之外的其它`admin_*`表了。

## Laravel 7.x的日期时间类型字段的显示问题 {#qa-11}

请先阅读 https://learnku.com/docs/laravel/7.x/upgrade/7445#date-serialization

如果想使用默认的`2020-03-04 16:11:00`格式，也可以在你的模型里面引入`Elegant\Admin\Traits\DefaultDatetimeFormat`

```php
use Elegant\Admin\Traits\DefaultDatetimeFormat;

class User extends Model
{
    use DefaultDatetimeFormat;
}
```



## 覆写内置视图 {#qa-12}

如果有需要自己修改view，但是不方便直接修改`laravel-admin`的情况，可以用下面的办法解决

复制`vendor/encore/laravel-admin/views`到项目的`resources/views/admin`，然后在`app/Admin/bootstrap.php`文件中加入代码：

```php
// 覆盖`admin`命名空间下的视图
app('view')->prependNamespace('admin', resource_path('views/admin'));
```

这样就用`resources/views/admin`下的视图覆盖了`laravel-admin`的内置视图。

在laravel-admin每个新版本发布的时候, 内置视图都有可能会变更，所以如果你覆写了laravel-admin的视图，在更新laravel-admin版本的时候, 很有可能会出现视图方面的问题，这个需要你对照修改过的视图文件和内置视图自行修改解决。