package com.example.navigationdrawerexample;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.support.v4.view.ViewPager2;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

public class DrawerItemCustomAdapter extends ArrayAdapter<ObjectDrawerItem> {

	Context mContext;
	int layoutResourceId;
	ObjectDrawerItem data[] = null;
    Typeface tf;

	public DrawerItemCustomAdapter(Context mContext, int layoutResourceId, ObjectDrawerItem[] data)
    {
		super(mContext, layoutResourceId, data);
		this.layoutResourceId = layoutResourceId;
		this.mContext = mContext;

        try {
            tf = Typeface.createFromAsset(getContext().getAssets(), "fonts/byekan.otf");
        }
        catch(Exception e){}

        this.data = data;
	}


    @Override
    public int getCount() {
        return this.data.length;
    }

    @Override
    public ObjectDrawerItem getItem(int position) {
        return data[position];
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

	@Override
	public View getView(int position, View convertView, ViewGroup parent)
    {
        View listItem = convertView;
        LayoutInflater inflater = ((Activity) mContext).getLayoutInflater();
        listItem = inflater.inflate(layoutResourceId, parent, false);

        if(data[position].hide) {
            listItem.setVisibility(View.GONE);
            listItem.getLayoutParams().height = 1;
        }else {

            ObjectDrawerItem folder = data[position];
            ImageView imageViewIcon = (ImageView) listItem.findViewById(R.id.imageViewIcon);

            TextView textViewName;
            textViewName = (TextView) listItem.findViewById(R.id.textViewName);
            if(folder.name.indexOf("__")>-1) {
                TextView t1 = (TextView) listItem.findViewById(R.id.textViewNameHide);
                TextView t2 =  (TextView) listItem.findViewById(R.id.textViewName);
                t1.setVisibility(View.VISIBLE);
                t2.setVisibility(View.GONE);

                imageViewIcon.setVisibility(View.GONE);
                imageViewIcon.getLayoutParams().width=1;

                listItem.getLayoutParams().height=30;
                listItem.setPadding(40,0,0,0);
            }
            else
            {
                TextView t1 = (TextView) listItem.findViewById(R.id.textViewNameHide);
                TextView t2 =  (TextView) listItem.findViewById(R.id.textViewName);
                t1.setVisibility(View.GONE);
                t2.setVisibility(View.VISIBLE);
            }


            textViewName.setTextColor(Color.parseColor("#A00707"));
            //textViewName.setTextColor(Color.WHITE);
            textViewName.setTypeface(tf);

            imageViewIcon.setImageResource(folder.icon);
            textViewName.setText(folder.name);

            listItem.setVisibility(View.VISIBLE);
        }

		return listItem;
	}

}


//textViewName.setBackgroundColor(Color.RED);
//  int color = Color.argb( 200, 255, 64, 64 );
//  textViewName.setBackgroundColor( color );


//Typeface robotolight = Typeface.createFromAsset( mContext.getAssets(), "byekan.ttf");