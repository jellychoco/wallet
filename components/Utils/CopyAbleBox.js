import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import QRCode from "qrcode.react";
function CopyAbleBox({ content }) {
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [message, setMessage] = useState("");
  const showAlert = (type, msg) => {
    setSeverity(type);
    setMessage(msg);
    setOpenAlert(true);
  };
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.875rem",
          color: "gray",
        }}
      >
        <div>{content}</div>
        <div>
          <CopyToClipboard
            style={{ fontSize: "1.25rem" }}
            text={content}
            onCopy={() => showAlert("success", "복사되었습니다.")}
          >
            <FileCopyIcon />
          </CopyToClipboard>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "5%" }}>
        <QRCode value={content} />
      </div>
      <Snackbar
        open={openAlert}
        autoHideDuration={2000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleAlertClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CopyAbleBox;
