//添加收藏

function AddFavorite(sURL, sTitle)
{
    
    sURL = encodeURI(sURL);
    try
    {
        
        window.external.addFavorite(sURL, sTitle);
        
    }
    catch (e)
    {
        
        try
        {
            
            window.sidebar.addPanel(sTitle, sURL, "");
            
        }
        catch (e)
        {
            
            alert("dddddddddddd");
            
        }
        
    }
    
}

//设为首页

function SetHome()
{
    
      var temp = window.location.href;
            if (window.ActiveXObject) {
                this.style.behavior = 'url(#default#homepage)';
                this.setHomePage(temp);
                return;
            }
            else if (window.sidebar) {
                if (window.netscape) {
                    try {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                    }
                    catch (e) {
                        alert("此操作被浏览器拒绝！请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
                    }
                }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage', temp);
            }
    
}
