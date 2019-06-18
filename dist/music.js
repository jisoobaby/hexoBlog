const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "红楼梦 - 葛冬梅",
        artist: '葛冬梅',
        url: 'http://www.ytmp3.cn/down/73693.mp3',
        cover: 'http://img.ytmp3.cn/image/83.jpg',
      },
      {
        name: '出山 - 羽莲亭',
        artist: '羽莲亭',
        url: 'http://www.ytmp3.cn/down/73680.mp3',
        cover: 'http://img.ytmp3.cn/image/31.jpg',
      },
      {
        name: '我在等的就是你 - 李明健',
        artist: '李明健',
        url: 'http://www.ytmp3.cn/down/73676.mp3',
        cover: 'http://img.ytmp3.cn/image/42.jpg',
      }
    ]
});