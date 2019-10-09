$(function(){
    var m_st, m_po = 200; //滚动到600像素时显示
    $(window).scroll(
        function () {
            m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (m_st > m_po) {
                $('.fix-top').slideDown(0);
            }else{
                $('.fix-top').slideUp(0);
            }
        })

});