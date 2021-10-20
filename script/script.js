$(function () {
    /* $('a').click(function (e) {
        e.preventDefault();
    }); */

    // 신간소개
    /* $.ajax ({
        url: 'data/NEW_DATA.json',
        dataType: 'json',
        success: function (data) {  // 객체 타입(Object Type)의 배열(Array)
            console.log(data);
            // $('#wrap').text(data);   // 객체 >> object 파일로 나옴
            let $table = $('<table>');   // 실제 태그 생성
            // console.log(table);
            // for (let i; i < data.length; i++) {
            for (let i in data) {
                let $num = data[i].num;
                let $name = data[i].name;    // 객체 변수면 보통 $를 붙이지만 안 써도 상관 없음
                let $author = data[i].author;
                let $pub = data[i].pub;
                let $date = data[i].date;

                // console.log($id, $firstName, $email);

                let $tr = $('<tr>').append(
                    $('<td>').text($num),         // <td>1</td>
                    $('<td>').text($name),        // <td>1</td>
                    $('<td>').text($author),      // <td></td>
                    $('<td>').text($pub),         // <td></td>
                    $('<td>').text($date),        // <td>mjoul0@google.com</td>
                ).append('</tr>');
                $table.append($tr);
            }
            $('#wrap').append($table);
        },
        error: function () {
            alert('데이터 연결에 실패하였습니다.');
        }
    }); */

    // 이 주의 책
    /* $.ajax ({
        url: 'data/WEEK_DATA.json',
        dataType: 'json',
        success: function (data) {  // 객체 타입(Object Type)의 배열(Array)
            console.log(data);
            // $('#wrap').text(data);   // 객체 >> object 파일로 나옴
            let $table = $('<table>');   // 실제 태그 생성
            // console.log(table);
            // for (let i; i < data.length; i++) {
            for (let i in data) {
                let $num = data[i].num;
                let $name = data[i].name;    // 객체 변수면 보통 $를 붙이지만 안 써도 상관 없음
                let $author = data[i].author;
                let $pub = data[i].pub;
                let $date = data[i].date;

                console.log($id, $firstName, $email);

                let $tr = $('<tr>').append(
                    $('<td>').text($num),         // <td>1</td>
                    $('<td>').text($name),        // <td>1</td>
                    $('<td>').text($author),      // <td></td>
                    $('<td>').text($pub),         // <td></td>
                    $('<td>').text($date),        // <td>mjoul0@google.com</td>
                ).append('</tr>');
                $table.append($tr);
            }
            $('#wrap').append($table);
        },
        error: function () {
            alert('데이터 연결에 실패하였습니다.');
        }
    }); */

    // 화제의 책
    /* $.ajax ({
        url: 'data/BEST_DATA.json',
        dataType: 'json',
        success: function (data) {  // 객체 타입(Object Type)의 배열(Array)
            console.log(data);
            // $('#wrap').text(data);   // 객체 >> object 파일로 나옴
            let $table = $('<table>');   // 실제 태그 생성
            // console.log(table);
            // for (let i; i < data.length; i++) {
            for (let i in data) {
                let $num = data[i].num;
                let $name = data[i].name;    // 객체 변수면 보통 $를 붙이지만 안 써도 상관 없음
                let $author = data[i].author;
                let $pub = data[i].pub;
                let $date = data[i].date;

                console.log($id, $firstName, $email);

                let $tr = $('<tr>').append(
                    $('<td>').text($num),         // <td>1</td>
                    $('<td>').text($name),        // <td>1</td>
                    $('<td>').text($author),      // <td></td>
                    $('<td>').text($pub),         // <td></td>
                    $('<td>').text($date),        // <td>mjoul0@google.com</td>
                ).append('</tr>');
                $table.append($tr);
            }
            $('#wrap').append($table);
        },
        error: function () {
            alert('데이터 연결에 실패하였습니다.');
        }
    }); */

    let top = document.querySelector('#wrap > header');

    // 상단 메뉴 고정
    if (scroll >= top) {
        top.classList.add('sticky');    // position: fixed; top: 0;
    } else {
        top.classList.remove('sticky');
    }

    // 탭메뉴
    $('.tab_menu > a').click('', function () {
        $(this).addClass('on').siblings('a').removeClass('on');
        let idx = $(this).index();  // index
        console.log(idx);
        $('.list').eq(idx).show().siblings('.list').hide();
    });

    // bxSlider 작성
    $('.event_slider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true
    });
    $('.goods').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 600
    });
});