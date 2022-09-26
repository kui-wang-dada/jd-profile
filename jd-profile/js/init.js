(function () {
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const hostname = window.location.hostname;
  const port = window.location.port;
  let href = window.location.href;
  const protocol = window.location.protocol;
  const pathname = window.location.pathname;
  const search = window.location.search;

  if (isMobile) {
    if (hostname.includes('www')) {
      href = hostname.replace('www', 'm');
    } else if (!hostname.includes('www')) {
      href = 'm.' + hostname;
    }
    if (search) {
      href = href + search;
    }
    if (port) {
      href += ':' + port;
    }
    console.log(href, protocol, pathname, hostname);
    window.location.href = protocol + '//' + href;
  }
})();
