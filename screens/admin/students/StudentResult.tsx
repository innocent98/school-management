import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../../../constants';
import {result} from '../../../constants/dummy';
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import {style} from '../../../constants/style';
import LogoBanner from '../../../components/LogoBanner';
import ScreenSizes from '../../../constants/utils/ScreenSizes';
import EditResult from './EditResult';
import {SavedData} from './EditStudent';

const StudentResult = () => {
  const {itemWidth} = ScreenSizes();

  const [isEdit, setIsEdit] = useState(false);

  return (
    <SafeAreaView
      style={[style.safeArea, {backgroundColor: COLORS.light.primary}]}>
      <FocusedStatusBar backgroundColor={COLORS.light.primary} />

      {isEdit && <SavedData />}

      <ScrollView>
        <View style={style.container}>
          <LogoBanner />

          <View
            style={[
              style.column,
              {gap: SIZES.xl, marginTop: SIZES.xl, alignItems: 'flex-start'},
            ]}>
            <View style={style.card}>
              {/* table */}
              <ScrollView horizontal={true}>
                <View style={style.table}>
                  <View style={style.tableHead}>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Course code (unit)
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Score
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      Grade (credit)
                    </Text>
                    <Text style={[style.tableItem, {width: itemWidth * 0.45}]}>
                      GP
                    </Text>
                  </View>

                  {result.map(r => (
                    <View key={r.id}>
                      {!r.sub && (
                        <View style={style.tableBody}>
                          <Text
                            style={[
                              style.tableItem,
                              {width: itemWidth * 0.45},
                            ]}>
                            {r.code}
                          </Text>
                          <Text
                            style={[
                              style.tableItem,
                              {width: itemWidth * 0.45},
                            ]}>
                            {r.score}
                          </Text>
                          <Text
                            style={[
                              style.tableItem,
                              {width: itemWidth * 0.45},
                            ]}>
                            {r.grade}
                          </Text>
                          <Text
                            style={[
                              style.tableItem,
                              {width: itemWidth * 0.45},
                            ]}>
                            {r.gp}
                          </Text>
                        </View>
                      )}

                      {r.sub && (
                        <View style={style.tableBody}>
                          <Text
                            style={[
                              style.tableItem,
                              {width: itemWidth * 0.45},
                            ]}>
                            {r.sub}
                          </Text>
                          <Text
                            style={[
                              style.tableItem,
                              {width: itemWidth * 0.45},
                            ]}>
                            {r.total}
                          </Text>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* edit result */}
            <EditResult setIsEdit={setIsEdit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentResult;
