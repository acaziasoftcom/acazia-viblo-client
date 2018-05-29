import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
const Item = ({ icon, count, style }) => {
    return (
        <View style={[{ flexDirection: 'row' }, style]}>
            <Icon
                name={icon}
                type='material-community'
                color='#5E5EF4'
                size={17}
            />
            <Text style={{ marginLeft: 5 }}>{count}</Text>
        </View>
    )
}
const icons = [
    {
        id: 1,
        icon: 'eye',
        count: 0
    },
    {
        id: 2,
        icon: 'eye',
        count: 0
    },
    {
        id: 3,
        icon: 'comment-multiple',
        count: 0
    },
    {
        id: 4,
        icon: 'eject',
        count: 0
    }
]
export default class PostItem extends Component {
    render() {
        return (
            <TouchableOpacity style={{ backgroundColor: '#fff', marginBottom: 5, paddingLeft: 10, paddingTop: 4, paddingBottom: 4 }}>
                <View style={styles.conainerHeader}>
                    <Image
                        style={{ width: 45, height: 45, borderRadius: 23 }}
                        source={{ uri: 'http://i.9mobi.vn/cf/images/2015/03/nkk/nhung-hinh-anh-dep-3.jpg' }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 13 }}>Trương bk hn</Text>
                        <Text style={{ fontSize: 12 }}>Trương bk hn</Text>
                    </View>
                </View>
                <Text style={styles.title}>Trương pro vip bn vd</Text>
                <View style={styles.containerIcon}>
                    {icons.map((value) => {
                        if (value.id !== 1) {
                            return (
                                <Item style={{ marginLeft: 20 }} icon={value.icon} count={value.count} />
                            )
                        } else {
                            return (
                                <Item icon={value.icon} count={value.count} />
                            )
                        }
                    })}
                </View>
                <Text>ssssssssssss</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    conainerHeader: {
        flexDirection: 'row',
    },
    title: { fontSize: 18, color: '#000', marginBottom: 12, marginTop: 5 },
    containerIcon:{ flexDirection: 'row', marginBottom: 17 }
});
