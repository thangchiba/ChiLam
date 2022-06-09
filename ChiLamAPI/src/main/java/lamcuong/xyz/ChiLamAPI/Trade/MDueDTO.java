package lamcuong.xyz.ChiLamAPI.Trade;

public class MDueDTO {
    private String dueId;
    private String customerId;
    private Long money;
    private java.sql.Date createDate;
    private java.sql.Date updateDate;
    private Boolean delFlg;

    public String getDueId() {
        return this.dueId;
    }

    public void setDueId(String dueId) {
        this.dueId = dueId;
    }

    public String getCustomerId() {
        return this.customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public Long getMoney() {
        return this.money;
    }

    public void setMoney(Long money) {
        this.money = money;
    }

    public java.sql.Date getCreateDate() {
        return this.createDate;
    }

    public void setCreateDate(java.sql.Date createDate) {
        this.createDate = createDate;
    }

    public java.sql.Date getUpdateDate() {
        return this.updateDate;
    }

    public void setUpdateDate(java.sql.Date updateDate) {
        this.updateDate = updateDate;
    }

    public Boolean getDelFlg() {
        return this.delFlg;
    }

    public void setDelFlg(Boolean delFlg) {
        this.delFlg = delFlg;
    }
}
