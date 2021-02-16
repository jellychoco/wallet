import {Avatar, IconButton, Typography} from "@material-ui/core"
import {Add} from "@material-ui/icons"
import React, {useState} from "react"
import AddContactModal from "./Modals/AddContactModal"
import PersonalContactInfoModal from "./Modals/PersonalContactInfoModal"
const dummyData = [
  {
    id: 1,
    profileImage: "",
    name: "aemin",
    phone: "01079008653",
    address: "asdkpkdp",
    email: "ma88082@gmail.com",
  },
  {
    id: 2,
    profileImage: "",
    name: "baemin",
    phone: "01079008653",
    address: "asdkpkdp",
    email: "ma88082@gmail.com",
  },
  {
    id: 3,
    profileImage: "",
    name: "cmin",
    phone: "01079008653",
    address: "asdkpkdp",
    email: "ma88082@gmail.com",
  },
  {
    id: 4,
    profileImage: "",
    name: "김재민",
    phone: "01079008653",
    address: "asdkpkdp",
    email: "ma88082@gmail.com",
  },
  {
    id: 5,
    profileImage: "",
    name: "나재민",
    phone: "01079008653",
    address: "asdkpkdp",
    email: "ma88082@gmail.com",
  },
  {
    id: 6,
    profileImage: "",
    name: "송재민",
    phone: "01079008653",
    address: "asdkpkdp",
    email: "ma88082@gmail.com",
  },
  {
    id: 7,
    profileImage: "",
    name: "심재민",
    phone: "01079008653",
    address: "asdkpkdp",
    email: "ma88082@gmail.com",
  },
  {
    id: 8,
    profileImage: "",
    name: "심나라",
    phone: "01079008653",
    address: "asdkpkdp",
    email: "ma88082@gmail.com",
  },
]

function Contact() {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [selectedFriend, setSelectedFriend] = useState({
    open: false,
    data: null,
  })

  const handlePersonalContactModal = () => {
    setSelectedFriend({...selectedFriend, open: false})
  }
  const alphabet = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]
  const getFirstHangul = (str) => {
    if (!str) return ""
    const cho = [
      "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
    let result = ""
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i) - 44032
      if (code > -1 && code < 11172) result += cho[Math.floor(code / 588)]
    }
    return result[0]
  }

  const contactListGenerator = (contactList) => {
    if (!contactList || !contactList.length) return []

    return alphabet.map((spell, key) => {
      const filterdList = contactList.filter((info) => {
        if (!getFirstHangul(info.name)) {
          return info.name.charAt(0).toUpperCase() === spell
        } else {
          return getFirstHangul(info.name) === spell
        }
      })

      if (filterdList.length) {
        return (
          <div key={spell + key} style={{margin: "20px"}}>
            <div>{spell}</div>
            <div>
              {filterdList.map((value, key) => {
                return (
                  <div 
                    onClick={()=>{
                        setSelectedFriend({...selectedFriend,data:value,open:true})
                    }}
                    style={{display: "flex", margin: "30px 0px 30px 0px"}}
                    key={value.address + key}
                  >
                    <Avatar
                      src={value.profileImage ? value.profileImage : ""}
                    />
                    <div style={{paddingLeft: "5%"}}>
                      <Typography variant='body1'>{value.name}</Typography>
                      <Typography variant='caption'>{value.phone}</Typography>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }
    })
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
        padding: "5%",
        overflow: "auto",
      }}
    >
      <div>
        <IconButton
          onClick={() => {
            setOpen(true)
          }}
          color='primary'
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: "1rem",
            margin: "1%",
          }}
        >
          <Add />
          추가
        </IconButton>
        <Typography variant='h5'>주소록</Typography>
      </div>
      <div style={{marginBottom: "15%"}}>
        {/* main */}
        {contactListGenerator(dummyData)}
      </div>

      <AddContactModal open={open} handleClose={handleClose} />
      <PersonalContactInfoModal
        open={selectedFriend.open}
        handleClose={handlePersonalContactModal}
        data={selectedFriend.data}
      />
    </div>
  )
}

export default Contact
