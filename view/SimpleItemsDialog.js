
import React, { Component } from 'react';

import {
    View,
    Text,
    Animated,
    TouchableOpacity,
    FlatList
} from 'react-native';

import BaseDialog from './BaseDialog';

class SimpleItemsDialog extends BaseDialog {

    static defaultProps = {
        title: "标题",
        items: ['a', 'b', 'c'],
        itemKey: 'key',
        itemStyle: {
            fontSize: 14,
            fontWeight: '400',
            color: '#333333'
        },
        cancel: true,
        cancelText: '取消',
        cancelTextStyle: {
            fontSize: 14,
            fontWeight: '400',
            color: '#999999'
        },
        onPress: null,
    }

    constructor(props) {
        super(props);
    }

    _getContentPosition() {
        return { justifyContent: 'flex-end', alignItems: 'center' }
    }


    renderItems() {
        return this.props.items.map((item, index) => {
            return <TouchableOpacity
                onPress={() => {
                    this.dismiss(() => {
                        if (this.props.onPress) {
                            this.props.onPress(index);
                        }
                    });
                }}
                key={index}
                style={{ width: this.mScreenWidth, height: this.getSize(49), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={this.props.itemStyle}>{typeof item == 'string' ? item : item[this.props.itemKey]}</Text>
                <View style={{ position: 'absolute', bottom: 0, width: this.mScreenWidth, height: this.mOnePixel, backgroundColor: '#E8EEF0' }} />
            </TouchableOpacity>
        })
    }

    renderCancel() {
        return <TouchableOpacity
            onPress={() => this.dismiss()}
            style={{ width: this.mScreenWidth, height: this.getSize(49), justifyContent: 'center', alignItems: 'center' }}>
            <Text style={this.props.cancelTextStyle}>{this.props.cancelText}</Text>
            <View style={{ position: 'absolute', bottom: 0, width: this.mScreenWidth, height: this.mOnePixel, backgroundColor: '#E8EEF0' }} />
        </TouchableOpacity>
    }

    renderContent() {
        return <View style={{ width: this.mScreenWidth, backgroundColor: '#ffffff' }}>
            <Text style={[{ 
                height: 44, 
                lineHeight: 44, 
                textAlign: "center",
                backgroundColor: "#f6f7f9",
                color: "#666666",
                fontSize: 14,
                borderBottomColor: "#fefefe",
                borderBottomWidth: 1
            }, this.props.titleTextStyle]}>{this.props.title}</Text>
            {this.renderItems()}
            {this.props.cancel ? this.renderCancel() : null}
        </View>
    }
}

export default SimpleItemsDialog;
