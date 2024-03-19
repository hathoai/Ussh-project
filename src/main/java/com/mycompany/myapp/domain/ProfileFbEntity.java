package com.mycompany.myapp.domain;

import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import lombok.Data;

import java.util.Objects;

@Entity
@Data
@Table(name = "profileFb", schema = "Ussh")
public class ProfileFbEntity {
    @Basic
    @Column(name = "facebook_id")
    private Integer facebookId;

    @Id
    @Column(name = "_id")
    private String id;

    @Basic
    @Column(name = "about")
    private String about;
    @Basic
    @Column(name = "birthday")
    private String birthday;
    @Basic
    @Column(name = "can_post")
    private String canPost;
    @Basic
    @Column(name = "category")
    private String category;
    @Basic
    @Column(name = "checkins")
    private Integer checkins;
    @Basic
    @Column(name = "company_overview")
    private String companyOverview;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "founded")
    private String founded;
    @Basic
    @Column(name = "has_added_app")
    private String hasAddedApp;
    @Basic
    @Column(name = "hometown")
    private String hometown;
    @Basic
    @Column(name = "is_community_page")
    private String isCommunityPage;
    @Basic
    @Column(name = "is_published")
    private String isPublished;
    @Basic
    @Column(name = "likes")
    private Integer likes;
    @Basic
    @Column(name = "link")
    private String link;
    @Basic
    @Column(name = "location")
    private String location;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "personal_info")
    private String personalInfo;
    @Basic
    @Column(name = "personal_interests")
    private String personalInterests;
    @Basic
    @Column(name = "talking_about_count")
    private Integer talkingAboutCount;
    @Basic
    @Column(name = "phone")
    private String phone;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name = "website")
    private String website;
    @Basic
    @Column(name = "were_here_count")
    private Integer wereHereCount;
    @Basic
    @Column(name = "fan_count")
    private Integer fanCount;
    @Basic
    @Column(name = "new_like_count")
    private Integer newLikeCount;
    @Basic
    @Column(name = "seq_number")
    private Integer seqNumber;
    @Basic
    @Timestamp
    @Column(name = "create_date")
    private String createDate;
    @Basic
    @Column(name = "profile_type")
    private String profileType;

    public Integer getFacebookId() {
        return facebookId;
    }

    public void setFacebookId(Integer facebookId) {
        this.facebookId = facebookId;
    }


    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getCanPost() {
        return canPost;
    }

    public void setCanPost(String canPost) {
        this.canPost = canPost;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getCheckins() {
        return checkins;
    }

    public void setCheckins(Integer checkins) {
        this.checkins = checkins;
    }

    public String getCompanyOverview() {
        return companyOverview;
    }

    public void setCompanyOverview(String companyOverview) {
        this.companyOverview = companyOverview;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFounded() {
        return founded;
    }

    public void setFounded(String founded) {
        this.founded = founded;
    }

    public String getHasAddedApp() {
        return hasAddedApp;
    }

    public void setHasAddedApp(String hasAddedApp) {
        this.hasAddedApp = hasAddedApp;
    }

    public String getHometown() {
        return hometown;
    }

    public void setHometown(String hometown) {
        this.hometown = hometown;
    }

    public String getIsCommunityPage() {
        return isCommunityPage;
    }

    public void setIsCommunityPage(String isCommunityPage) {
        this.isCommunityPage = isCommunityPage;
    }

    public String getIsPublished() {
        return isPublished;
    }

    public void setIsPublished(String isPublished) {
        this.isPublished = isPublished;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPersonalInfo() {
        return personalInfo;
    }

    public void setPersonalInfo(String personalInfo) {
        this.personalInfo = personalInfo;
    }

    public String getPersonalInterests() {
        return personalInterests;
    }

    public void setPersonalInterests(String personalInterests) {
        this.personalInterests = personalInterests;
    }

    public Integer getTalkingAboutCount() {
        return talkingAboutCount;
    }

    public void setTalkingAboutCount(Integer talkingAboutCount) {
        this.talkingAboutCount = talkingAboutCount;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public Integer getWereHereCount() {
        return wereHereCount;
    }

    public void setWereHereCount(Integer wereHereCount) {
        this.wereHereCount = wereHereCount;
    }

    public Integer getFanCount() {
        return fanCount;
    }

    public void setFanCount(Integer fanCount) {
        this.fanCount = fanCount;
    }

    public Integer getNewLikeCount() {
        return newLikeCount;
    }

    public void setNewLikeCount(Integer newLikeCount) {
        this.newLikeCount = newLikeCount;
    }

    public Integer getSeqNumber() {
        return seqNumber;
    }

    public void setSeqNumber(Integer seqNumber) {
        this.seqNumber = seqNumber;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getProfileType() {
        return profileType;
    }

    public void setProfileType(String profileType) {
        this.profileType = profileType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProfileFbEntity that = (ProfileFbEntity) o;
        return Objects.equals(facebookId, that.facebookId) && Objects.equals(id, that.id) && Objects.equals(about, that.about) && Objects.equals(birthday, that.birthday) && Objects.equals(canPost, that.canPost) && Objects.equals(category, that.category) && Objects.equals(checkins, that.checkins) && Objects.equals(companyOverview, that.companyOverview) && Objects.equals(description, that.description) && Objects.equals(founded, that.founded) && Objects.equals(hasAddedApp, that.hasAddedApp) && Objects.equals(hometown, that.hometown) && Objects.equals(isCommunityPage, that.isCommunityPage) && Objects.equals(isPublished, that.isPublished) && Objects.equals(likes, that.likes) && Objects.equals(link, that.link) && Objects.equals(location, that.location) && Objects.equals(name, that.name) && Objects.equals(personalInfo, that.personalInfo) && Objects.equals(personalInterests, that.personalInterests) && Objects.equals(talkingAboutCount, that.talkingAboutCount) && Objects.equals(phone, that.phone) && Objects.equals(username, that.username) && Objects.equals(website, that.website) && Objects.equals(wereHereCount, that.wereHereCount) && Objects.equals(fanCount, that.fanCount) && Objects.equals(newLikeCount, that.newLikeCount) && Objects.equals(seqNumber, that.seqNumber) && Objects.equals(createDate, that.createDate) && Objects.equals(profileType, that.profileType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(facebookId, id, about, birthday, canPost, category, checkins, companyOverview, description, founded, hasAddedApp, hometown, isCommunityPage, isPublished, likes, link, location, name, personalInfo, personalInterests, talkingAboutCount, phone, username, website, wereHereCount, fanCount, newLikeCount, seqNumber, createDate, profileType);
    }

}
