<?php
namespace allure330\flarum-ext-japanese;

use Flarum\Event\ConfigureLocales;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->listen(ConfigureLocales::class, function (ConfigureLocales $event) {
        $event->loadLanguagePackFrom(__DIR__);
    });
};
