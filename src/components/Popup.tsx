import React, { useState } from "react";

interface PopupProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const Popup: React.FC<PopupProps> = ({ onCancel, onConfirm }) => {
  const [confirmationShown, setConfirmationShown] = useState(false);

  const handleConfirm = () => {
    onConfirm(); // confirm 함수 실행
    setConfirmationShown(false); // 팝업 닫기
  };

  const handleCancelPopup = () => {
    onCancel();
    setConfirmationShown(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        {!confirmationShown ? (
          <>
            <p>이메일을 보내시겠습니까?</p>
            <button onClick={handleCancelPopup} style={{ marginRight: "10px" }}>
              취소
            </button>
            <button onClick={() => setConfirmationShown(true)}>보내기</button>
          </>
        ) : (
          <>
            <p>메일이 전송되었습니다!</p>
            <button onClick={handleCancelPopup}>확인</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
