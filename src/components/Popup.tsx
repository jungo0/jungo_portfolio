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
        fontFamily: "GmarketSansTTFMedium",
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
          fontFamily: "GmarketSansTTFMedium",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        {!confirmationShown ? (
          <>
            <p
              style={{
                fontFamily: "GmarketSansTTFMedium",
                fontSize: "1rem",
                marginTop: "6px",
                padding: "0 10px",
                color: "rgba(1,1,1,0.7)",
                marginBottom: "30px",
              }}
            >
              이메일을 보내시겠습니까?
            </p>
            <button
              style={{
                border: "1px solid #D0D5DD",
                padding: "4px 12px",
                fontFamily: "GmarketSansTTFMedium",
                fontSize: "0.9rem",
                width: "80px",
                color: "rgba(1,1,1,0.7)",
                textAlign: "center",
                borderRadius: "5px",
                marginRight: "12px",
                background: "#F0F0F0",
              }}
              onClick={handleCancelPopup}
            >
              취소
            </button>
            <button
              style={{
                border: "1px solid #D0D5DD",
                width: "80px",
                padding: "5px 12px",
                textAlign: "center",
                fontSize: "0.9rem",
                fontFamily: "GmarketSansTTFMedium",
                borderRadius: "5px",
                background: "RGB(25, 75, 138,0.7)",
                color: "#fff",
              }}
              onClick={() => setConfirmationShown(true)}
            >
              보내기
            </button>
          </>
        ) : (
          <>
            <p
              style={{
                fontFamily: "GmarketSansTTFMedium",
                fontSize: "1rem",
                marginTop: "6px",
                padding: "0 10px",
                color: "rgba(1,1,1,0.7)",
                marginBottom: "20px",
              }}
            >
              메일이 전송되었습니다!
            </p>
            <button
              style={{
                border: "1px solid #D0D5DD",
                padding: "6px 15px",
                fontFamily: "GmarketSansTTFMedium",
                fontSize: "0.9rem",
                borderRadius: "5px",
                background: "RGB(25, 75, 138,0.7)",
                color: "#fff",
              }}
              onClick={handleCancelPopup}
            >
              확인
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
