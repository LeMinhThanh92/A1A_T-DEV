import { styled } from '@mui/material/styles';
import { Avatar, Box, Card, CardContent, IconButton } from '@mui/material';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import { ChangeEvent, useState } from "react";

function MasterItemImageAdd() {
  const [imageAdded, setImageAdded] = useState(null);

  const handleImageUpload = (event:ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageAdded(imageUrl);
    }
  };

  const AvatarWrapper = styled(Card)(
    ({ theme }) => `

    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: ${theme.spacing(2)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(20)};
      height: ${theme.spacing(20)};
    }
`
  );

  const ButtonUploadWrapper = styled(Box)(
    ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`
  );
  const Input = styled('input')({
    display: 'none'
  });

  return (

      <AvatarWrapper>
        <Avatar variant="rounded" alt="Image" src={imageAdded}/>
        <ButtonUploadWrapper>
          <Input
            accept="image/*"
            id="icon-button-file"
            name="icon-button-file"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" color="primary" disabled={imageAdded!==null}>
              <UploadTwoToneIcon />
            </IconButton>
          </label>
        </ButtonUploadWrapper>
      </AvatarWrapper>

  );
}

export default MasterItemImageAdd;
