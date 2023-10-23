window.onload = function () {

    //ชื่อเว็บ
    let title = 'WebProject';

    //Server Ip (counter)
    var serverIp = 'PLAY.MCCPF.WIN';
    var serverIpPort = 25565;

    //Banner ภาพหลัก 
    var bannerTop = '../img/BannerMainBG.jpg';

    //--------------- ภาพป้ายหน้าหลัก ---------------
    //ระบบ Special Items + ภาพ 1/3 
    var text_Gfirst = 'Special Items';
    var image_Gfirst = '../img/Special-Items.jpg';
    //ระบบ Economy + ภาพ 2/3
    var text_Gsecond = 'Economy'
    var image_Gsecond = '../img/Economy.png';
    //ระบบ Great Community + ภาพ 3/3
    var text_Gtrird = 'Great Community'
    var image_Gtrird = '../img/Great-Community.jpg';
    //--------------------------------------------

    //รูปแบบ Server (FullPVP, MiniGame, Survival, อื่น ๆ)
    var typeServer = 'Full PVP';

    //--------------- Home Gallery ---------------
    // Image automatically changes according to the name :)
    //Firs player nick / comment text
    var firstPlayerName = 'MrBeast';
    var firstPlayerComment = "เจ้าของเซิฟ";
    //Second player nick / comment text
    var secondPlayerName = 'tackle4826';
    var secondPlayerComment = "แอดมินเซิฟ";
    //Third player nick / comment text
    var trirdPlayerName = 'truefaster';
    var trirdtPlayerComment = "ผู้ดูแลระบบ";
    //--------------------------------------------

    //Social media links / banner (url)
    var urlFacebook = "https://github.com/Garland23072";
    var urlTwiiter = "https://github.com/Garland23072";
    var urlInstagram = "https://github.com/Garland23072";
    var urlYoutube = "https://github.com/Garland23072";
    var discordInvite = "https://github.com/Garland23072";
    var bannerSocialImage = "https://i.imgur.com/oSbKvAT.png";


    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------
    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------
    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------

    try {

        document.getElementById('serverIpText').innerHTML = serverIp;
        document.getElementById('title').innerHTML = title;
        document.getElementById('bannerTop').style.backgroundImage = "url(" + bannerTop + ")";
        document.getElementById('image_Gfirst').style.backgroundImage = "url(" + image_Gfirst + ")";
        document.getElementById('text_Gfirst').innerHTML = text_Gfirst;
        document.getElementById('image_Gsecond').style.backgroundImage = "url(" + image_Gsecond + ")";
        document.getElementById('text_Gsecond').innerHTML = text_Gsecond;
        document.getElementById('image_Gtrird').style.backgroundImage = "url(" + image_Gtrird + ")";
        document.getElementById('text_Gtrird').innerHTML = text_Gtrird;
        document.getElementById('typeServer').innerHTML = typeServer;
        document.getElementById('firstPlayerName').innerHTML = firstPlayerName;
        document.getElementById('secondPlayerName').innerHTML = secondPlayerName;
        document.getElementById('trirdPlayerName').innerHTML = trirdPlayerName;
        document.getElementById('firstPlayerImage').src = "https://cravatar.eu/helmavatar/" + firstPlayerName + "/190.png";
        document.getElementById('secondPlayerImage').src = "https://cravatar.eu/helmavatar/" + secondPlayerName + "/190.png";
        document.getElementById('trirdPlayerImage').src = "https://cravatar.eu/helmavatar/" + trirdPlayerName + "/190.png";
        document.getElementById('firstPlayerComment').innerHTML = firstPlayerComment;
        document.getElementById('secondPlayerComment').innerHTML = secondPlayerComment;
        document.getElementById('trirdtPlayerComment').innerHTML = trirdtPlayerComment;
        document.getElementById('urlFacebook').href = urlFacebook;
        document.getElementById('urlTwiiter').href = urlTwiiter;
        document.getElementById('urlInstagram').href = urlInstagram;
        document.getElementById('urlYoutube').href = urlYoutube;
        document.getElementById('discordInvite').href = discordInvite;
        document.getElementById('bannerSocialImage').style.backgroundImage = "url(" + bannerSocialImage + ")";

    } catch (e) {


    }


    MinecraftAPI.getServerStatus(serverIp, {
        port: serverIpPort // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        document.getElementById('serverStatus').innerHTML = status.online ? 'Online' : 'Offline';
        document.getElementById('playersOn').innerHTML = status.players.now;
        document.getElementById('playersMax').innerHTML = status.players.max;
    });

    setTimeout(() => {
        var status = document.getElementById('serverStatus');
        if (status.textContent == 'Online') {
            status.style.color = 'green'
        } else {
            status.style.color = 'red'
        }
    }, 2000);

}

function copyIp() {
    let ip = document.getElementById('serverIpText').innerHTML;
    navigator.clipboard.writeText(ip);
}