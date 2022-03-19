"ui";
ui.layout(
    <vertical>
        <frame>
            <android.view.SurfaceView id="surface" w="*" h="*" />
            <img id="box" src="https://gitee.com/fidcz/blyy_tools_update/raw/master/img/block.png" y="400px" layout_gravity="center_horizontal" w="750px" h="150px"/>
            <card w="*" h="{{cardH}}px" marginTop="{{cardY}}px" cardCornerRadius="{{cardRadius}}px" cardElevation="8" cardBackgroundColor="#ffffff">
                <input id="orderid" w="250" h="50" margin="8 20 0 0" hint="这里显示订单号" singleLine="true" />
                <button id="search" w="auto" h="50" margin="8 20 10 0" layout_gravity="right" text="查询" radius="30" style="Widget.AppCompat.Button.Colored" />
                <frame id="cxframe" visibility="invisible">
                    <text id="createtime" w="220" h="20" text="创建时间:" margin="12 75 0 0" gravity="left" />
                    <text id="shopname" w="130" h="20" text="店铺" margin="5 75 15 0" layout_gravity="right" gravity="right|center" />
                    <text id="paytime" w="220" h="20" text="付款时间:" margin="12 98 0 0" gravity="left" />
                    <text id="orderstatus" w="130" h="20" text="订单状态" margin="5 98 15 0" layout_gravity="right" gravity="right|center" />
                    <text id="kd" w="200" h="20" text="圆通快递 YT3189331867687" margin="12 121 15 0" layout_gravity="left" gravity="left|center" />
                    <text id="xt" w="100" h="20" text="已开单" margin="5 121 15 0" layout_gravity="right" gravity="right|center" />
                    <horizontal marginTop="140" w="*" h="160">
                        <list w="*" id="mxList">
                            <card w="*" h="50" marginBottom="1">
                                <text id="mxtitle" margin="12 5 10 0" padding="0 0 10 0" w="*" h="20" text="{{this.title}}" ellipsize="end" singleLine="true" />
                                <text id="mx_numid" margin="12 26 10 0" size="12" w="150" h="20" layout_gravity="left" gravity="left|center" text="{{this.numid}}" />
                                <text id="mx_pay" margin="12 26 10 0" size="12" w="100" h="20" layout_gravity="right" gravity="right|center" text="金额:{{this.pay}}" />
                            </card>
                        </list>
                    </horizontal>
                </frame>
                <button id="send_xt" w="120" h="60"text="销退" marginBottom="65" marginLeft="0" layout_gravity="bottom" style="Widget.AppCompat.Button.Borderless.Colored" />
                <button id="send_dj" w="120" h="60"text="登记" marginBottom="65" marginLeft="135" layout_gravity="bottom" style="Widget.AppCompat.Button.Borderless.Colored" />
                <button id="send_cx" w="120" h="60"text="查询" marginBottom="65" marginLeft="270" layout_gravity="bottom" style="Widget.AppCompat.Button.Borderless.Colored" />
                <button id="startAuto" w="*" h="60"text="开始识别" marginBottom="10" layout_gravity="bottom|center_horizontal" style="Widget.AppCompat.Button.Colored" />
            </card>
        </frame>
    </vertical>
);