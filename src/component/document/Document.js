import React from 'react';
import "./Document.css";
import FeatureTitle from "../common/feature/FeatureTitle";
import "../common/Common.css";

const Document = () => {
    return (
        <div className="feature-background">
            <FeatureTitle title="API Document"/>
            <div className="document-body">
                <span className="document-big-title">푸시를 보내는 법</span>
                <span className="document-small-title">1. 논템플릿 푸시</span>
                <span className="document-normal-text">POST /push</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Request</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;targetTokens: [ String ... ],</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;targetGroups: [ String ... ],</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;title: String,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;body: String,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;reservationDate: LocalDateTime(Optional)</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <span className="document-normal-text">1. targetTokens: 푸시 알림을 보낼 타겟의 토큰을 리스트 형태로 입력합니다.</span>
                <span className="document-normal-text">2. targetGroups: 푸시 알림을 보낼 그룹의 이름을 리스트 형태로 입력합니다.</span>
                <span className="document-normal-text">3. title: 푸시 알림의 제목을 입력합니다.</span>
                <span className="document-normal-text">4. body: 푸시 알림의 본문을 입력합니다.</span>
                <span className="document-normal-text">5. reservationDate: 푸시 알림의 예약 시간을 입력합니다. (Optional)</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Response</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;-</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <span className="document-small-title">2. 템플릿 푸시</span>
                <span className="document-normal-text">POST /template-push</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Request</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;targetTokens: [ String ... ],</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;targetGroups: [ String ... ],</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;templateId: Long,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;reservationDate: LocalDateTime(Optional)</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <span className="document-normal-text">1. targetTokens: 푸시 알림을 보낼 타겟의 토큰을 리스트 형태로 입력합니다.</span>
                <span className="document-normal-text">2. targetGroups: 푸시 알림을 보낼 그룹의 이름을 리스트 형태로 입력합니다.</span>
                <span className="document-normal-text">3. templateId: 푸시 알림의 제목과 본문을 포함한 템플릿의 아이디를 입력합니다.</span>
                <span className="document-normal-text">5. reservationDate: 푸시 알림의 예약 시간을 입력합니다. (Optional)</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Response</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;-</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <span className="document-big-title">푸시 기록을 조회하는 법</span>
                <span className="document-small-title">1. 푸시 기록 조회</span>
                <span className="document-normal-text">GET /history?page={"{pageNumber}&"}size={"{pageSize}"}</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Request</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;-</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <span className="document-normal-text">1. pageNumber: 푸시 기록 페이징 시 페이징 된 페이지 번호 (1부터 시작)</span>
                <span className="document-normal-text">2. pageSize: 푸시 기록 페이징 시 한 페이지에 담길 푸시 기록 갯수</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Response</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;pageNumber: Int,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;totalPageNumber: Int,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;histories: [{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: Long,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: String,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body: String,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt: LocalDateTime,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reservedAt: LocalDateTime?,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completedAt: LocalDateTime>,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;{"}"}]</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;isLastPage: Boolean</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <span className="document-normal-text">1. pageNumber: 페이지 번호</span>
                <span className="document-normal-text">2. totalPageNumber: 총 페이지 갯수</span>
                <span className="document-normal-text">3. histories: 푸시 기록 정보 배열</span>
                <span className="document-normal-text">4. histories.id: 푸시 기록 고유 아이디</span>
                <span className="document-normal-text">5. histories.title: 푸시 알림 제목</span>
                <span className="document-normal-text">6. histories.body: 푸시 알림 본문</span>
                <span className="document-normal-text">7. histories.createdAt: 푸시 알림이 생성된 시간</span>
                <span className="document-normal-text">8. histories.reservedAt: 푸시 알림이 예약된 시간 (Nullable)</span>
                <span className="document-normal-text">9. histories.completedAt: 푸시 알림이 정상적으로 성공한 시간 (Nullable)</span>
                <span className="document-normal-text">10. isLastPage: 이 페이지가 마지막 페이지이면 true, 아니면 false</span>
                <span className="document-small-title">2. 푸시 기록 자세히 조회</span>
                <span className="document-normal-text">GET /history/{"{"}historyId{"}"}?page={"pageNumber"}&size={"pageSize"}</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Request</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;-</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <span className="document-normal-text">1. pageNumber: 푸시 기록 페이징 시 페이징 된 페이지 번호 (1부터 시작)</span>
                <span className="document-normal-text">2. pageSize: 푸시 기록 페이징 시 한 페이지에 담길 푸시 기록 갯수</span>
                <span className="document-normal-text">3. historyId: 자세히 볼 푸시 기록의 아이디</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Response</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;pageNumber: Int,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;totalPageNumber: Int,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;historyDetails: [{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;targetToken: String,</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status: String</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;{"}"}]</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;isLastPage: Boolean</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <span className="document-normal-text">1. pageNumber: 페이지 번호</span>
                <span className="document-normal-text">2. totalPageNumber: 총 페이지 갯수</span>
                <span className="document-normal-text">3. historyDetails: 자세한 푸시 기록 정보 배열</span>
                <span className="document-normal-text">4. historyDetails.targetToken: 푸시 타겟 토큰</span>
                <span className="document-normal-text">5. historyDetails.status: 푸시 결과</span>
                <span className="document-normal-text">6. isLastPage: 이 페이지가 마지막 페이지이면 true, 아니면 false</span>
            </div>
        </div>
    );
};

export default Document;