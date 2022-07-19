import {
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./sellerCertificate.scss";
export default function SellerCertificate({ certificates }) {
  const [editStatus, setEditStatus] = useState(false);
  const handleEdit = (e) => {
    setEditStatus(true);
  };
  const handleNotEdit = (e) => {
    setEditStatus(false);
  };
  return (
    <div className="sellerIntro">
      {" "}
      <div className="top">
        <div className="left">
          <div className="editButton" onClick={handleEdit}>
            Chỉnh sửa
          </div>
          <h1 className="title">Chứng chỉ</h1>
          <div className="item">
            <div className="details">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 850 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Tiêu đề</TableCell>
                      <TableCell align="right">Tên chứng chỉ</TableCell>

                      <TableCell align="right">Link</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {certificates.map((item) => {
                      return (
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {item.title}
                          </TableCell>
                          <TableCell align="right"> {item.name}</TableCell>

                          <TableCell align="right">
                            <a href={item.linkCer}>LINK</a>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              {editStatus && (
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  className="btnGroup"
                  style={{ justifyContent: "center" }}
                >
                  <Button>Cập nhật</Button>
                  <Button onClick={handleNotEdit}>Hủy</Button>
                </ButtonGroup>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
