import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { saveAs } from 'file-saver';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resumeUrl from "../../assets/files/Aaditya_Rana_Resume.pdf";

const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    margin-top: 7rem;
`;

const ViewerContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin-top: 10px;
    border: 1px solid #ccc;
    height: ${({ pdfHeight }) => pdfHeight}; /* Dynamic height based on PDF height */
`;

const DownloadButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #218838;
        transform: translateY(-2px);
    }

    &:active {
        background-color: #1e7e34;
        transform: translateY(0);
    }
`;

const Resume = () => {
    const viewerContainerRef = useRef(null);
    const resizeObserverRef = useRef(null); // Ref to hold ResizeObserver instance
    const [pdfHeight, setPdfHeight] = useState('100%');

    const downloadResume = () => {
        saveAs(resumeUrl, 'Resume.pdf');
    };

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const onDocumentLoad = (pdf) => {
        const { numPages } = pdf;
        const pageHeight = 792; // A4 page height in points (11 inches)
        const height = numPages * pageHeight;
        setPdfHeight(`${height}px`);
    };

    useEffect(() => {
        resizeObserverRef.current = new ResizeObserver((entries) => {
            if (entries[0]?.target) {
                viewerContainerRef.current.style.height = pdfHeight;
            }
        });

        if (viewerContainerRef.current) {
            resizeObserverRef.current.observe(viewerContainerRef.current);
        }

        return () => {
            if (resizeObserverRef.current) {
                resizeObserverRef.current.disconnect(); // Disconnect the observer on unmount
            }
        };
    }, [pdfHeight]);

    return (
        <ResumeContainer>
            <DownloadButton onClick={downloadResume}>Download Resume</DownloadButton>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <ViewerContainer ref={viewerContainerRef} pdfHeight={pdfHeight}>
                    <Viewer
                        fileUrl={resumeUrl}
                        plugins={[defaultLayoutPluginInstance]}
                        onDocumentLoad={onDocumentLoad}
                    />
                </ViewerContainer>
            </Worker>
        </ResumeContainer>
    );
};

export default Resume;
