/*
  Taskforce Widget
  A generic widget include script which we will use to show further campaigns etc
  <thomasalwyndavis@gmail.com> for support
/*

/* <script type="text/javascript">
    window._idl = {};
    _idl.variant = "modal";
    _idl.campaign = "defundnsa";
    (function() {
        var idl = document.createElement('script');
        idl.type = 'text/javascript';
        idl.async = true;
        idl.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + (_idl.url || '') + '&_idl_test=1&campaign=' + (_idl.campaign || '') + '&variant=' + (_idl.variant || 'banner');
        document.getElementsByTagName('body')[0].appendChild(idl);
    })();
</script>

http://geoip.taskforce.is/64.64.64.64

*/


var causes = {
  stopwatchingus: {

  }
}

var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;width:100%;height:100px;top:0;opacity:1;z-index:100;background:#000;';
document.body.appendChild(elemDiv);
var iframe = document.createElement('iframe');
iframe.style.cssText = 'width: 100%;height: 100%;'
iframe.src = 'http://tfrce.github.io/widget/stopwatchingus/modal.html';
elemDiv.appendChild(iframe);
var closeButton = document.createElement('button');
closeButton.className = 'close-button';
closeButton.innerText = 'close-button';
elemDiv.appendChild(closeButton);
closeButton.onclick = function() {
  elemDiv.remove();
}


