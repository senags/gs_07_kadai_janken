$('#pushman').on("click", function () {
    $('#right').delay(2000).fadeOut(0);
});

$('#pushman').on('click', function () {
    $('#left').delay(500).animate({ 'left': '-2000px' }, 1500);
});

$('#nameget').animate({ 'opacity': '.7' }, 300).animate({ 'opacity': '1' }, 300).animate({ 'opacity': '.7' }, 300).animate({ 'opacity': '1' }, 300).animate({ 'opacity': '.7' }, 300).animate({ 'opacity': '1' }, 300);


$('#pushman').on('click', function () {
    $('#naoe').fadeOut(500);
});

$('#pushman').on('click', function () {
    $('#naoe').removeClass('cursor');
});

$('#pushman').on('click', function () {
    $('#keiji').delay(2000).animate({ 'opacity': '1' });
});


$('#pushman').on('click', function () {
    $('#textbox').delay(3000).animate({ 'opacity': '1' });
});

$('#pushman').on('click', function () {
    $('#gu_btn').delay(4000).animate({ 'opacity': '1' });
}
);

$('#pushman').on('click', function () {
    $('#cho_btn').delay(4000).animate({ 'opacity': '1' });
}
);

$('#pushman').on('click', function () {
    $('#par_btn').delay(4000).animate({ 'opacity': '1' });
}
);


// ここまでがじゃんけんするまでの表示に関するJS

//キセルの時のJs

const num = Math.random();
const waySelector = Math.floor(num * 10);



if (waySelector == 0) {

    $('#janken').on('click', function () {
        $('#tengeki').animate({ 'opacity': '1' });
    });

    $('#janken').on('click', function () {
        $('#janken').removeClass('z-index');
    });

    $('#janken').on('click', function () {
        $('#initial').css('z-index', '0');
    });

    $('#janken').on('click', function () {
        $('#tengeki').css('cursor', 'pointer');
    });

    $('#janken').on('click', function () {
        $('#tengeki').delay(100).animate({ 'opacity': '.5' }).animate({ 'opacity': '1' }).animate({ 'opacity': '.5' }).animate({ 'opacity': '1' });
    });

    $('#janken').on('click', function () {
        $('#nojiru').get(0).play();
    });

    $('#tengeki').on('click', function () {
        $('#kiseru').get(0).play();
    });

    $('#janken').on('click', function () {
        $('#janken').remove();
    });

    $('#tengeki').on('click', function () {
        $('#tengeki').remove();
    });

    $('#tengeki').on('click', function () {
        $('#movieplay').slideDown(300);
    });

    $('#tengeki').on('click', function () {
        $('#movieplay').delay(11000).fadeOut(1500);
    });

    $('#tengeki').on('click', function () {
        $('#initial').fadeOut(200);
    });

    $('#tengeki').on('click', function () {
        $('#endingwraper').delay(13000).fadeIn(1000);
    });

    $('#tengeki').on('click', function () {
        $('#reload').delay(15000).fadeIn(500);
    });

    $('#reload').on('click', function () {
        window.location.reload();
    });

}

//以下通常ルート

else {
    const jnum = Math.random();
    const jselect = Math.floor(jnum * 3);
    console.log(jselect);
    if (jselect == 0) //慶次がグーの場合
    {
        $('#janken').on('click', function () {
            $('#bureikou').fadeIn(800);
        });

        $('#janken').on('click', function () {
            $('#bureikou').delay(1000).fadeOut(800);
        });

        $('#janken').on('click', function () {
            $('#janken').remove();
        });

        $('#janken').on('click', function () {
            $('#initial').remove();
        });
        // ここまでがボタン押下までの指示

        //グーをクリックした時
        $('#gu_btn').on('click', function () {
            $('#drawtext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#gu_btn').on('click', function () {
            $('#drawimg').delay(5500).fadeIn();
        });

        $('#gu_btn').on('click', function () {
            $('#drawbox').delay(5500).fadeIn();
        });

        $('#gu_btn').on('click', function () {
            $('#d_reload').delay(7000).fadeIn();
        });

        $('#d_reload').on('click', function () {
            window.location.reload();
        });

        //チョキをクリックした時
        $('#cho_btn').on('click', function () {
            $('#losegutext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#cho_btn').on('click', function () {
            $('#loseguimg').delay(5500).fadeIn();
        });

        $('#cho_btn').on('click', function () {
            $('#losegubox').delay(5500).fadeIn();
        });

        $('#cho_btn').on('click', function () {
            $('#p_reload').delay(7000).fadeIn();
        });

        $('#p_reload').on('click', function () {
            window.location.reload();
        });

        //　パーをクリックした時
        $('#par_btn').on('click', function () {
            $('#wintext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#par_btn').on('click', function () {
            $('#winimg').delay(5500).fadeIn();
        });

        $('#par_btn').on('click', function () {
            $('#winbox').delay(5500).fadeIn();
        });

        $('#par_btn').on('click', function () {
            $('#p_reload').delay(7000).fadeIn();
        });

        $('#p_reload').on('click', function () {
            window.location.reload();
        });

    }
    else if (jselect == 1) //慶次がチョキの場合
    {
        $('#janken').on('click', function () {
            $('#bureikou').fadeIn(800);
        });

        $('#janken').on('click', function () {
            $('#bureikou').delay(1000).fadeOut(800);
        });

        $('#janken').on('click', function () {
            $('#janken').remove();
        });

        $('#janken').on('click', function () {
            $('#initial').remove();
        });

        // グーをクリック
        $('#gu_btn').on('click', function () {
            $('#wintext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#gu_btn').on('click', function () {
            $('#winimg').delay(5500).fadeIn();
        });

        $('#gu_btn').on('click', function () {
            $('#winbox').delay(5500).fadeIn();
        });

        $('#gu_btn').on('click', function () {
            $('#p_reload').delay(7000).fadeIn();
        });

        $('#p_reload').on('click', function () {
            window.location.reload();
        });

        //　チョキをクリック
        $('#cho_btn').on('click', function () {
            $('#drawtext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#cho_btn').on('click', function () {
            $('#drawimg').delay(5500).fadeIn();
        });

        $('#cho_btn').on('click', function () {
            $('#drawbox').delay(5500).fadeIn();
        });

        $('#cho_btn').on('click', function () {
            $('#d_reload').delay(7000).fadeIn();
        });

        $('#d_reload').on('click', function () {
            window.location.reload();
        });
        
        //パーをクリック
        $('#par_btn').on('click', function () {
            $('#losechotext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#par_btn').on('click', function () {
            $('#losechoimg').delay(5500).fadeIn();
        });

        $('#par_btn').on('click', function () {
            $('#losechobox').delay(5500).fadeIn();
        });

        $('#par_btn').on('click', function () {
            $('#p_reload').delay(7000).fadeIn();
        });

        $('#p_reload').on('click', function () {
            window.location.reload();
        });


    }
    else //慶次がパーの場合
    {
        $('#janken').on('click', function () {
            $('#bureikou').fadeIn(800);
        });

        $('#janken').on('click', function () {
            $('#bureikou').delay(1000).fadeOut(800);
        });

        $('#janken').on('click', function () {
            $('#janken').remove();
        });

        $('#janken').on('click', function () {
            $('#initial').remove();
        });

        // グーをクリック
        $('#gu_btn').on('click', function () {
            $('#losepatext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#gu_btn').on('click', function () {
            $('#losepaimg').delay(5500).fadeIn();
        });

        $('#gu_btn').on('click', function () {
            $('#losepabox').delay(5500).fadeIn();
        });

        $('#gu_btn').on('click', function () {
            $('#p_reload').delay(7000).fadeIn();
        });

        $('#p_reload').on('click', function () {
            window.location.reload();
        });
        //　チョキをクリック
        $('#cho_btn').on('click', function () {
            $('#wintext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#cho_btn').on('click', function () {
            $('#winimg').delay(5500).fadeIn();
        });

        $('#cho_btn').on('click', function () {
            $('#winbox').delay(5500).fadeIn();
        });

        $('#cho_btn').on('click', function () {
            $('#p_reload').delay(7000).fadeIn();
        });

        $('#p_reload').on('click', function () {
            window.location.reload();
        });
        //　パーをクリック
        $('#par_btn').on('click', function () {
            $('#drawtext').delay(3500).slideDown().delay(1000).animate({ 'left': '72%' });
        });

        $('#par_btn').on('click', function () {
            $('#drawimg').delay(5500).fadeIn();
        });

        $('#par_btn').on('click', function () {
            $('#drawbox').delay(5500).fadeIn();
        });

        $('#par_btn').on('click', function () {
            $('#d_reload').delay(7000).fadeIn();
        });

        $('#d_reload').on('click', function () {
            window.location.reload();
        });
    }
}

//入力した名前を反映する
$(function(){
    $(document).on('input','#Input',function(){
        $('.Text').text($('#Input').val());
    });
});




