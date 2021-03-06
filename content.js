var dics = {
  'ユーザＩＤ と パスワード を入力してください。': 'Vui lòng nhập tài khoản và mật khẩu:',
  'ログイン画面へ': 'Về trang đăng nhập',
  'ログイン': 'Đăng nhập',
  '取消し': 'Làm lại',
  'ログアウトしました。': 'Đăng xuất thành công!',
  '　登　　録　': 'Đăng ký',
  '日報入力＆照会': 'Báo cáo hàng ngày',
  '査閲画面': 'Trang đánh giá',
  'ＡＢＣ物件状況照会': 'Yêu cầu',
  'ログアウト': 'Đăng xuất',
  '反映': 'Áp dụng',
  'ＩＮＤＥＸ': 'Trang chủ',
  '削除': 'Xóa',
  'テンプレート挿入': 'Chèn biểu mẫu',
  'ﾛｸﾞｲﾝﾕｰｻﾞ': 'Người đăng nhập',
  '検索': 'Tìm kiếm',
  'トップ': 'Về đầu trang',
  'テキスト出力': 'Xuất ra văn bản',
  'キャンセル': 'Hủy báo cáo',
  '査閲': 'Đánh giá',
  '入力承認': 'Duyệt',
  '自動承認': 'Chấp thuận',
  '開発：開発作業': 'Công việc: Đang làm việc',
  '開発：フォロー作業': 'Công việc: Làm việc tiếp theo',
  'FSE：行動予定': 'FSE：Lịch làm sắp tới',
  '開発状況照会': 'Truy vấn trạng thái',
  'ユーザＩＤ': 'Mã định danh:',
  'パスワード': 'Mật khẩu xác thực:',
  '業務': 'Dự án',
  '作業': 'Công việc',
  '日付': 'Ngày',
  '部門': 'Nhóm',
  '担当': 'Nhân viên',
  '時間帯': 'Giờ giấc báo cáo',
  '時間': 'Giờ làm',
  '金額': 'Tiền công',
  '支援': 'Giờ công',
  '［注意］': '[Chú ý]',
  '目的と状況・実績': 'Mục đích, tình hình, thực tế',
  '決定事項とペンディング': 'Quyết định & đang chờ xử lý',
  '次回予定・所感': 'Thời gian biểu cho ngày hôm sau',
  '等を具体的に報告のこと': 'Vui lòng báo cáo cụ thể những mục trên',
  '日報処理': 'Công việc thường ngày',
  '報告・相談': 'Báo cáo & trợ giúp',
  /*'共通強化': 'Tăng cường chung',
  '共通維持': 'Bảo trì thường',*/
  '共通': 'Chung',
  /*'企画・基盤': 'Quy hoạch và nền tảng',
  '共通': 'Thường',
  '就業強化': 'Tăng cường việc làm',
  '就業維持': 'Duy trì việc làm',
  '就業': 'Việc làm',
  '給与': 'Lương',
  '給与(要定既存)': 'Mức lương (yêu cầu hiện có)',
  '給与強化': 'Tăng lương',
  '給与維持': 'Biên chế',
  '人事': 'Nguồn nhân lực',
  '人事(要定既存)': 'Nguồn nhân lực (bắt buộc hiện có)',
  '人事強化': 'Tăng cường nguồn nhân lực',
  '人事維持': 'Bảo trì Nhân sự',
  'OH強化': 'Tăng cường OH',
  'OH維持': 'Bảo trì OH',
  'OH': 'OH',
  'HRM強化': 'Tăng cường nhân sự',
  'HRM維持': 'Duy trì HRM',
  'HRM': 'HRM',*/
  '詳細設計': 'Thiết kế chi tiết',
  'AP開発': 'Lập trình',
  'ｺｰﾃﾞｨﾝｸﾞ': 'đang viết',
  '製造者ﾃｽﾄ': 'tự test'
};


setInterval(function () {
  var $item = $('body');

  if (!$item.data('lang')) {
    $item.data('lang', true);

    $('font')
      .each(function (i, item) {
        $(item).replaceWith($('<span>', { html: $(item).html() }));
      });

    for (var i in dics) {
      if ($item.html()) {
        let html = $item.html()
          .replace(new RegExp('&nbsp;', 'g'), '')
          .replace(new RegExp(i, "g"), `<span>${dics[i]}</span>`)
          .replace(new RegExp('<br', 'g'), '<div class="break"></div')
          .replace(new RegExp(`value="<span>${dics[i]}</span>"`, 'g'), `value="${dics[i]}"`)
          .replace(new RegExp('<div class="break"></div><div class="break"></div>', 'g'), '<div class="break"></div>');

        $item.html(html);
      }
    }
  }
}, 0);