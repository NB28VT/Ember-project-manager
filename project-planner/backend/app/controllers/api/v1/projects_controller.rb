class Api::V1::ProjectsController < ApplicationController
  def index
    @projects = Project.all

    render json: @projects
  end

  def show
    @project = Project.find(params[:id])

    render json: @project
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :description)
  end
end
