import styled from "styled-components";

//destructured gist element
const Gist = ({ gist }) => {

    //designed UI according to the refernces given

    return (
      <Wrapper>
        <TopBar>
          <LeftComp>
            <ImageDiv>
              <MainLink href={gist.owner.url} target="_blank">
                <Image src={gist.owner.avatar_url} alt={gist.id} />
              </MainLink>
            </ImageDiv>
            <Title>
              <MainLink href={gist.owner.url} target="_blank">
                {gist.owner.login}
              </MainLink>
            </Title>
          </LeftComp>
          <RightComp>
            <Comp>
              <Icon
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO1ZS2sTURSeqgvfoi5EaZvcOxW1oot24RO6rW4VFBGLIIo/QMFuUlTazDmJ+PoFXVVB8YFd15UgllofS9G2OSepFUGpVAU7ctNqM5NJMq80BueD7Oaec78z5373fBNNixAhQoQI/wM6EuYygdQj07ldWj1DB+6UyGb+B/RKAp/X6hESqP8vEWRTIN/U6g2bE7RSIH0tJKJDZp9Wb5CYOV5IQgJ90EyzQas3SOBHlrYCurKoG9BT3K4b1BYkRmN6fINA/lFIpAW5tWxeg9pUbi0MNBljWwTyhESekUAn/MaRwOcsbYU8Uu55AXxEAk1LINZTmSYtCDZhdpVAHi7o6VlhULefWBJpyEoke6EkCYO6Va6FFuQXSij8sTDNBoE8YKuiKYF7vYZSFZVIvwoLEkeOlXpeIvfZ8wqge1rCXOKZh2Mw5Pt+gkmgi9ZYNFR2gWk2SKA7xfnpsqfEOvCpojeBPKJazSuJOSL80nJ3pPhspTWN6fEVEui5Ta5nBfBJl0npgAD+bqtg1u+BiyV5h61Ffm7vzWx0LTTAGVtBZypeorG+bFwATdoXxtK5vZpPSKSrtjP20Mt6PcXtEvmb7c3kZJKaHRdsM6bW5Ic426sMIrl5wQB6Z2krI3PMaxiBfLRQxebPy5uWG5/WWp+8ay6VSI8dDlePbxJzarXfVphpv+dMqNG/eH9P1N4XHgK+7qBQA0HnIAl8y0ak33cw0/k6EMDJuWSYOe1AYtj/BbRgoPK9bJl0uTNIzFji/XIJ9Kxovyk6UzUiEvmQrQ0+KnJVI1Kt1rIbKNVmWhCYJVoL2ajaYa+GgRJOhx1o0HLY/8ivAHodhvyGbaCEk/wCvZXJz+uqeiGGaaB0hwtRAE9tvZaT5TeRooNBRpTmvrH1dgOlJ7M7/ZBochhRVOy4wR2uAkjkLqehsfX25OqwDZSnoRELFMotJBJWvEkdidBTtwbK6xgvkfs8x1K+QyA/8BLMq4HyaKwGKxWxJFQrSeRRx5HAcQPZC54MVAkIpEuWgiCPumnrslAVVaPGvAB0hW2gSsYy+LAA+uJKodxCyW8lCVafduzqoj4BBckrYGJ3HLN7tMVEUAP1b8AMx0DVHGEaqJoiVANVS6g/awr9flADVXOov9PUuB3UQEWIECFCBK1e8Bvmb3CYc/pBTwAAAABJRU5ErkJggg=="
                }
                alt={"File icon"}
              />
              <Label>
                <MainLink href={gist.url} target="_blank">
                  {Object.values(gist.files).length} Files
                </MainLink>
              </Label>
            </Comp>
            <Comp>
              <Icon
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABO0lEQVR4nN2VO04DMRCGzbPhAJTBkyaihAPkAnAVxA1WNCSe2R5RUNEhcQouQEGJEMXORDwUUdMYGaxoWRvW8W4Dv+TG+j3fjO2xlfp32i3uNjWJAWQBEtYoUzeX6wvkjEBiG2OS6wvkM/q+EFlyfbEKXpoLNfFz4CN5DXzIT+0VEFMIEBOpoEzxBRoXdv3z8BZZydTNNX3753ZDI5/5zN/d/sd8v1TyBVA/6cquAfGlB1wnB24FFHZVm9kBoNx6z3xQ8qgzYFDySCOfAPJj7dY8DA3vLR28DtBUHQLKTeNW3QPycVJjtQFgMfgNSC52jIyVtSvZgSOAORAfbdNsq3PQGGCYu8epANW3fANhrf1xqQZqU/QJQMbeAKmPXbbc5xFWIFWfgEn4zstpbwDXnR7ivsHKBe/UsX9eH5J8csPZcdKlAAAAAElFTkSuQmCC"
                }
                alt={"Fork icon"}
              />
              <Label>
                <MainLink href={gist.forks_url} target="_blank">
                  Fork
                </MainLink>
              </Label>
            </Comp>
            <Comp>
              <Icon
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4ElEQVR4nO2ZzS4sURDHz7Vxc5/ARxhVYStsvAOul2BvaSQWHUKiTyHxAnd5Yy+S6wax9Aw2wnTVhJWMjxCRkaOboGd8bKiW+iW9OXW6p2r+1dXJ/zhnGMaHgLj6Gzxvo+dzJKlrusDz2X1uVB19tQgknv/qZPG9RRHPNVUi3SDX6HmqKz7scMroig87kLh8n2MoKJaR3CYg3kmr5bJTDhKX01aTrVww9F8Idq+ctDvllPxxW9ZetVzwofdcQcBm+VohXwSaIspAU0QZaIooA00RZaApogw0RZSBpogy0BRRBpoiykBTRBn47RUB4loIaLRKX9K3fNSZuaKnuWDqchfEMvU83dQyDVb9o4lNXC6EiU0y3HBjsOrftPS9/Gt4c1RvQeLdTzwrmX216mDVB8ke3plGVyk6+Jn/E5KxTzgTqYXcmirxXsDLUXhgD0npWaBe/4Ge99IfS8acdoBkP5W10v98nSfStuM9p54ovANy8XJEl3wyEM4bwctV71Iy6LQDi9WhrFf56RoQn2Rje9IVQg0v/7OptdAe8S/wMhNUyNYip53e1f1W8PInmxo34OVv+KJm6lxAnIy7IoAkm/lRyLdAsoZxpc8VBSReRy+XQFIB4o3wZc2NX8MwnHbuALgMd0OmmQSaAAAAAElFTkSuQmCC"
                }
                alt={"Comments icon"}
              />
              <Label>
                <MainLink href={gist.comments_url} target="_blank">
                  Comments
                </MainLink>
              </Label>
            </Comp>
            <Comp>
              <Icon
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABrklEQVR4nLWWO0sDQRDHT3xgI1iJoHC3m4hgIZqAloKFgl9Av0MKP4EmnbmdE7Gw0FQ+UBC0sRAUK+1tFAIWIeZmFrFSQbTxZOMl0TMxe3IZmOZ25vefvdmXYYQwC+Qky8oJo1XGBe1xwN3WwEH2MUFvDOjdFA/9LRCgZQ7klV3QUqTw5KbXyQS5NQEk9S0yAQ7uQhXue8x25yMTYEBXQQEu6DISeMzGxC94dRaYaAqwBM4wIVMMMMMFbjCgY1UdB8ozgU+N4BX3Y/Iq5ytXMTCjmIptMFEaZUClZiAe2lHGHEqWZzG0ej/Aga6jgjOBtxaQ+eNXDduPPQzwNAL4hblW6K3bj6m018GBtv4NB9weSd90/d11z2vzG/4RrnJaV7nay5MLymkLCMppg6sCQOchBM7C0Q+9dp09wGuNfVH90+bHHXc8bINN4Y5pC6hd2KDSI+X1x2QqhAAdBFbIHbdprjLOQU6rzRSI2dcW4EBFv3mvasma6UJ3MEbdB9zBRQb47IsUteD+saHOkhNzRVpa8QJ3VE48WxpsKqBeDZaDs1rVfLPyqdzKF0cj+wRcOXJjzd5R4wAAAABJRU5ErkJggg=="
                }
                alt={"star icon"}
              />
              <Label>
                <MainLink href={gist.owner.starred_url} target="_blank">
                  Stars
                </MainLink>
              </Label>
            </Comp>
          </RightComp>
        </TopBar>
        <CardBody>
          <TimeStamps>
            <StampDiv>
              <StampTitle>Created at:</StampTitle>
              <StampValue>
                {new Date(gist.created_at).toLocaleDateString("en-GB")}
              </StampValue>
            </StampDiv>
            <StampDiv>
              <StampTitle>Last updated:</StampTitle>
              <StampValue>
                {new Date(gist.updated_at).toLocaleDateString("en-GB")}
              </StampValue>
            </StampDiv>
          </TimeStamps>
          <RepoTitle>{gist.description}</RepoTitle>
          <FileWrapper>
            {Object.values(gist.files).map((file) => {
              return (
                <Comp>
                  <Icon
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4nGNgQAMqHY9llLqerlbsfvpJqfvZf7y46+kDpa6nUQykAoglz94StKAbHT8tJ8kikE+gLt2i2vtIGp9axc6ntmiWtRBtESy4QD4jpFa+/j4HlqDsI85HUA3EOkwJezB208miZ/+Vup7V0sei7mf/FbqfxVLPoq5nh/ElfapZhA7Eu59zK3U/9yZoDqUWwQBJFmnVX2FT6n52g+hM2/XsMPkWdT27TkIJcYgsiygBSkM7jroQcUPrODpEkUWUAKVBaZHWaD4alHGkSEJVjgso9zyRhda0H3AqUux6uhakSLHr6TZyLFPueSKr2P10O9SiNbgt6nmiRl5zC6O0eKvU+VgVr6vAbbvup6sUu55+JNUCiJ6na7BZAgBRj4/LREGs9gAAAABJRU5ErkJggg=="
                    }
                    alt={"File icon"}
                  />
                  <Label>
                    <MainLink href={file.raw_url} target="_blank">
                      {file.filename}
                    </MainLink>
                  </Label>
                </Comp>
              );
            })}
          </FileWrapper>
        </CardBody>
      </Wrapper>
    );
}

//component Styles

const Wrapper = styled.div`
    width: 600px;
    background-color: #fff; 
    padding: 10px 10px 30px 10px; 
    border-bottom: 1px solid #ddd 
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0; 
`

const LeftComp = styled.div`
    display: flex;
    align-items: center;
    gap: 10px
`

const RightComp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap : 25px;
`;

const Comp = styled.div`
    display: flex;
    align-items : center;
    gap: 5px;
`

const Icon = styled.img`
    width : 15px;
    height : 15px;
`;

const Label = styled.p`
  font-weight: 600;
  color: #1f74da;
  font-size : 12px;
`;

const Title = styled.p`
    color: #1f74da; 
    font-size: 12px; 
    font-weight : 600;
`;

const ImageDiv = styled.div`
    width: 30px; /* Adjust the width and height as per your requirements */
    height: 30px;
    border-radius: 50%; /* Create a circular shape */
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%; /* Ensure the image covers the entire circular area */
    height: 100%;
    object-fit: cover;
`;

const CardBody = styled.div`
    align-items : left;
`;

const TimeStamps = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;
const StampDiv = styled.div`
    display: flex;
    gap: 5px;
    align-items:center;
    justify-content: center;
`;
const StampTitle = styled.div`
    font-size: 11px;
    color: #797b7c;
    font-weight: 400;
`;
const StampValue = styled.div`
    font-size: 11px;
    color: #797b7c;
`;

const RepoTitle = styled.p`
    font-size: 18px;
    color: #797b7c;
    font-weight: 600;
    margin-bottom: 0;
`;

const FileWrapper = styled.div`
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const MainLink = styled.a`
    text-decoration: none;
    border: none;
    outline: none;
    color: #1f74da;
`;


export default Gist
