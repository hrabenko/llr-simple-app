import React from 'react';

import {View, Text, StyleSheet, SectionList, useColorScheme} from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            {name: 'Hummus', price: '$5.00'},
            {name: 'Moutabal', price: '$5.00'},
            {name: 'Falafel', price: '$7.50'},
            {name: 'Marinated Olives', price: '$5.00'},
            {name: 'Kofta', price: '$5.00'},
            {name: 'Eggplant Salad', price: '$8.50'},
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            {name: 'Lentil Burger', price: '$10.00'},
            {name: 'Smoked Salmon', price: '$14.00'},
            {name: 'Kofta Burger', price: '$11.00'},
            {name: 'Turkish Kebab', price: '$15.50'},
        ],
    },
    {
        title: 'Sides',
        data: [
            {name: 'Fries', price: '$3.00', id: '11K'},
            {name: 'Buttered Rice', price: '$3.00'},
            {name: 'Bread Sticks', price: '$3.00'},
            {name: 'Pita Pocket', price: '$3.00'},
            {name: 'Lentil Soup', price: '$3.75'},
            {name: 'Greek Salad', price: '$6.00'},
            {name: 'Rice Pilaf', price: '$4.00'},
        ],
    },
    {
        title: 'Desserts',
        data: [
            {name: 'Baklava', price: '$3.00'},
            {name: 'Tartufo', price: '$3.00'},
            {name: 'Tiramisu', price: '$5.00'},
            {name: 'Panna Cotta', price: '$5.00'},
        ],
    },
];

const Item = ({name, price}) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);


const Separator = () => <View style={menuStyles.separator} />;

const MenuItems = () => {
    const colorScheme = useColorScheme();

    const renderItem = ({item}) => <Item name={item.name} price={item.price}/>;

    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={menuStyles.sectionHeader}>{title} </Text>
    );

    return (
        <View style={[
            colorScheme === 'light'
                ? { backgroundColor: '#fff' }
                : { backgroundColor: '#333333' },
        ]}>
            <SectionList
                keyExtractor={(item, index) => item + index}
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={Separator}
            >
            </SectionList>
        </View>
    );
};

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
    sectionHeader: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#F4CE14',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default MenuItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
});