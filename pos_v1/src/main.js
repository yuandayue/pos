//TODO: Please write code in this file.
//可使用loadAllItems()方法获取全部的商品，该方法返回结果为一个包含了商品对象的数组（样例）：
//Function loadAllItems(Input)[ item1, item2, item3, ..., itemN ]
//var Item
//{
//  barcode: 'ITEM000000',
//  name: '可口可乐',
//  unit: '瓶',
//  price: 3.00
//}
//可使用loadPromotions()方法获取全部的促销信息，该方法返回结果为一个包含有促销信息对象的数组（样例）：
//Function loadPromotions()
//[
// {
//    type: 'BUY_TWO_GET_ONE_FREE',
//    barcodes: [
//      'ITEM000000',
//      'ITEM000001'
//    ]
//  },
//  {
//    type: 'OTHER_PROMOTION',
//    barcodes: [
//      'ITEM000003',
//      'ITEM000004'
//    ]
//  }
//]
//Coded by YuanYue
Function GetItemInfo(Barcode)
{
	var ItemList = loadAllItems();
	for(var i = 0 ; i < ItemList.length; ++i)
	{
		if(ItemList[i].barcode == Barcode)
		{
			return ItemList[i];
		};
	};
	return null;
}
Function GetPromotions(Type)
{
	var PromotionList = loadPromotions();
	for(var i = 0; i < PromotionsList.length; ++i)
	{
		if(PromotionList[i].type == Type)
		{
			return PromotionList[i];
		};
	};
}
Function GetItemPos(Item,ItemList)
{
	for(var i = 0; i < ItemList.length; ++i)
	{
		if(ItemList[i].barcode == Item.barcode)
		{
			return i;
		}
	};
	return null;
}
Function IsBarcaodeExists(PromotionType,BarcodeList)
{
	for(var i = 0 ; i < BarcodeList.length; ++i)
		{
				if(PromotionType == BarcodeList[i].barcode)
					{
						return true;
					};
		};
		return false;
}
Function printInventory(InputList)
{
	var MoneySaved = 0;
	var TotalCost  = 0;
	var Inventory = "***<没钱赚商店>购物清单***";
	for(var i = 0; i < InputList.length; ++i)
	{
			var Item = GetItemInfo(InputList[i]);
	};
}
