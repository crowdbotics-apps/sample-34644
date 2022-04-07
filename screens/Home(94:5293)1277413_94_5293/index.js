import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_94_5294}>
        <Text style={styles.Text_94_5294}>胡蝶しのぶ</Text>
      </View>
      <View style={styles.View_94_5295}>
        <Text style={styles.Text_94_5295}>21, 大学生</Text>
      </View>
      <View style={styles.View_94_5296}>
        <View style={styles.View_94_5297}>
          <View style={styles.View_94_5298}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b392/a52e/a8ef24cf673d84f36c772ece512817f5"
              }}
              style={styles.ImageBackground_94_5299}
            />
            <View style={styles.View_94_5300}>
              <View style={styles.View_94_5301}>
                <Text style={styles.Text_94_5301}>
                  【最低保証¥3,000〜(時給)】
                  都内で働ける20代女性募集！待ってます！
                </Text>
              </View>
              <View style={styles.View_94_5302}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e37f/e543/ee2fa528623ca2b03e70c16680543083"
                  }}
                  style={styles.ImageBackground_94_5303}
                />
                <View style={styles.View_94_5304}>
                  <Text style={styles.Text_94_5304}>歌舞伎町キラメキ</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_94_5305}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88b9/ee49/911b332987e349d32c2b380b4b8ed812"
              }}
              style={styles.ImageBackground_94_5306}
            />
            <View style={styles.View_94_5307}>
              <View style={styles.View_94_5308}>
                <Text style={styles.Text_94_5308}>
                  【最低保証¥3,000〜(時給)】
                  都内で働ける20代女性募集！待ってます！
                </Text>
              </View>
              <View style={styles.View_94_5309}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e37f/e543/ee2fa528623ca2b03e70c16680543083"
                  }}
                  style={styles.ImageBackground_94_5310}
                />
                <View style={styles.View_94_5311}>
                  <Text style={styles.Text_94_5311}>歌舞伎町キラメキ</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_94_5312}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70ec/adad/3fa0e2f37182a995e07d8d9acd51b1d3"
              }}
              style={styles.ImageBackground_94_5313}
            />
            <View style={styles.View_94_5314}>
              <View style={styles.View_94_5315}>
                <Text style={styles.Text_94_5315}>
                  【最低保証¥3,000〜(時給)】
                  都内で働ける20代女性募集！待ってます！
                </Text>
              </View>
              <View style={styles.View_94_5316}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e37f/e543/ee2fa528623ca2b03e70c16680543083"
                  }}
                  style={styles.ImageBackground_94_5317}
                />
                <View style={styles.View_94_5318}>
                  <Text style={styles.Text_94_5318}>歌舞伎町キラメキ</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_94_5319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fc8/a1f0/4db952b21d4a98c1fa9652128593cce6"
              }}
              style={styles.ImageBackground_94_5320}
            />
            <View style={styles.View_94_5321}>
              <View style={styles.View_94_5322}>
                <Text style={styles.Text_94_5322}>
                  【最低保証¥3,000〜(時給)】
                  都内で働ける20代女性募集！待ってます！
                </Text>
              </View>
              <View style={styles.View_94_5323}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e37f/e543/ee2fa528623ca2b03e70c16680543083"
                  }}
                  style={styles.ImageBackground_94_5324}
                />
                <View style={styles.View_94_5325}>
                  <Text style={styles.Text_94_5325}>歌舞伎町キラメキ</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_94_5326}>
        <View style={styles.View_I94_5326_64_976}>
          <View style={styles.View_I94_5326_64_977}>
            <Text style={styles.Text_I94_5326_64_977}>9:41</Text>
          </View>
          <View style={styles.View_I94_5326_64_978}>
            <View style={styles.View_I94_5326_64_979} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4903/5b8d/8b494ed76c0b76253af621d9ae3d3539"
              }}
              style={styles.ImageBackground_I94_5326_64_980}
            />
            <View style={styles.View_I94_5326_64_981} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96b3/a205/63791e38648dfda2e0e2077ebfba663c"
            }}
            style={styles.ImageBackground_I94_5326_64_982}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d124/998b/c12b882bbc679c52f890f8e6f5af1e47"
            }}
            style={styles.ImageBackground_I94_5326_64_986}
          />
        </View>
      </View>
      <View style={styles.View_94_5327}>
        <View style={styles.View_94_5328} />
        <View style={styles.View_94_5329}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/649e/9807/ddcab55f2ba749f6bc4c3aa58eba7019"
            }}
            style={styles.ImageBackground_94_5330}
          />
        </View>
      </View>
      <View style={styles.View_94_5332}>
        <View style={styles.View_I94_5332_1_687}>
          <View style={styles.View_I94_5332_1_688}>
            <Text style={styles.Text_I94_5332_1_688}>9:41</Text>
          </View>
          <View style={styles.View_I94_5332_1_689}>
            <View style={styles.View_I94_5332_1_690} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fe0/fcba/080ae570096b0c6ff5aa5573f2c6f0a4"
              }}
              style={styles.ImageBackground_I94_5332_1_691}
            />
            <View style={styles.View_I94_5332_1_692} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/220e/5dae/0cf07a1746513633bf5e1c1d959f0a1b"
            }}
            style={styles.ImageBackground_I94_5332_1_693}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/217e/5e6c/2657b730c509646993bd93152fd89ab8"
            }}
            style={styles.ImageBackground_I94_5332_1_697}
          />
        </View>
        <View style={styles.View_I94_5332_1_702}>
          <View style={styles.View_I94_5332_1_703} />
          <View style={styles.View_I94_5332_77_1656}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eac/9197/b266f8f31cb11962163c01a83f4e4311"
              }}
              style={styles.ImageBackground_I94_5332_1_704}
            />
          </View>
          <View style={styles.View_I94_5332_77_1222}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I94_5332_77_1222_77_1194}
            />
            <View style={styles.View_I94_5332_77_1222_77_1195}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1faf/dd79/caa295d5b574574dadd32ff703a4ec55"
                }}
                style={styles.ImageBackground_I94_5332_77_1222_77_1195_1_447}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I94_5332_1_707}>
          <Text style={styles.Text_I94_5332_1_707}>歌舞伎町キラメキ</Text>
        </View>
      </View>
      <View style={styles.View_94_5412} />
      <View style={styles.View_94_5444} />
      <View style={styles.View_94_5413}>
        <View style={styles.View_94_5414}>
          <View style={styles.View_94_5415}>
            <Text style={styles.Text_94_5415}>ブロックしますか？</Text>
          </View>
          <View style={styles.View_94_5416}>
            <Text style={styles.Text_94_5416}>
              ブロックするとご自身の情報がお相手の画面に表示されなくなります。
              ※お相手には知られません。
            </Text>
          </View>
        </View>
        <View style={styles.View_94_5417}>
          <View style={styles.View_94_5418}>
            <View style={styles.View_94_5419}>
              <Text style={styles.Text_94_5419}>ブロック</Text>
            </View>
          </View>
          <View style={styles.View_94_5420}>
            <View style={styles.View_94_5421}>
              <Text style={styles.Text_94_5421}>キャンセル</Text>
            </View>
          </View>
          <View style={styles.View_94_5422}>
            <View style={styles.View_94_5423} />
            <View style={styles.View_94_5424} />
          </View>
        </View>
      </View>
      <View style={styles.View_94_5445}>
        <View style={styles.View_94_5446}>
          <View style={styles.View_94_5447}>
            <Text style={styles.Text_94_5447}>ブロックしますか？</Text>
          </View>
          <View style={styles.View_94_5448}>
            <Text style={styles.Text_94_5448}>
              ブロックするとご自身の情報がお相手の画面に表示されなくなります。
              ※お相手には知られません。
            </Text>
          </View>
        </View>
        <View style={styles.View_94_5449}>
          <View style={styles.View_94_5450}>
            <View style={styles.View_94_5451}>
              <Text style={styles.Text_94_5451}>ブロック</Text>
            </View>
          </View>
          <View style={styles.View_94_5452}>
            <View style={styles.View_94_5453}>
              <Text style={styles.Text_94_5453}>キャンセル</Text>
            </View>
          </View>
          <View style={styles.View_94_5454}>
            <View style={styles.View_94_5455} />
            <View style={styles.View_94_5456} />
          </View>
        </View>
      </View>
      <View style={styles.View_94_5349} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_94_5294: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_94_5294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5295: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_94_5295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5296: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("154%"),
    minHeight: hp("154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5297: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("154%"),
    minHeight: hp("154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5298: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5299: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_94_5300: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5301: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_5301: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5302: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5303: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_5304: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_94_5304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5305: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5306: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_94_5307: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5308: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_5308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5309: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5310: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_5311: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_94_5311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5312: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5313: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_94_5314: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5315: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_5315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5316: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5317: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_5318: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_94_5318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5319: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5320: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_94_5321: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5322: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_5322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5323: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5324: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_5325: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_94_5325: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5326: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I94_5326_64_976: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I94_5326_64_977: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I94_5326_64_977: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I94_5326_64_978: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I94_5326_64_979: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I94_5326_64_980: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I94_5326_64_981: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I94_5326_64_982: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I94_5326_64_986: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_94_5327: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_94_5328: {
    width: wp("100%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_94_5329: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_94_5330: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_94_5332: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I94_5332_1_687: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I94_5332_1_688: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I94_5332_1_688: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_I94_5332_1_689: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I94_5332_1_690: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I94_5332_1_691: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I94_5332_1_692: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8700000047683716
  },
  ImageBackground_I94_5332_1_693: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I94_5332_1_697: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I94_5332_1_702: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_I94_5332_1_703: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I94_5332_77_1656: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I94_5332_1_704: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I94_5332_77_1222: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I94_5332_77_1222_77_1194: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I94_5332_77_1222_77_1195: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I94_5332_77_1222_77_1195_1_447: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I94_5332_1_707: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I94_5332_1_707: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_5412: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.4000000059604645
  },
  View_94_5444: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("244%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.4000000059604645
  },
  View_94_5413: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("45%"),
    backgroundColor: "rgba(242, 242, 242, 0.800000011920929)"
  },
  View_94_5414: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_94_5415: {
    flexGrow: 1,
    width: wp("63%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_94_5415: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_94_5416: {
    flexGrow: 1,
    width: wp("63%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_94_5416: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_94_5417: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5418: {
    width: wp("36%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5419: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_94_5419: {
    color: "rgba(235, 87, 87, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_94_5420: {
    width: wp("36%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5421: {
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_94_5421: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_94_5422: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_5423: {
    width: wp("0%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_94_5424: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_94_5445: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("258%"),
    top: hp("45%"),
    backgroundColor: "rgba(242, 242, 242, 0.800000011920929)"
  },
  View_94_5446: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_94_5447: {
    flexGrow: 1,
    width: wp("63%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_94_5447: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_94_5448: {
    flexGrow: 1,
    width: wp("63%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_94_5448: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_94_5449: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5450: {
    width: wp("36%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5451: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_94_5451: {
    color: "rgba(235, 87, 87, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_94_5452: {
    width: wp("36%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_5453: {
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_94_5453: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_94_5454: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_5455: {
    width: wp("0%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_94_5456: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_94_5349: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8999999761581421
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
