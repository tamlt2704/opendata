currentdate=$(date +"%Y%m%d")
curl -o "./data/raw_data/vcb/${currentdate}.xml" 'https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx' -k
